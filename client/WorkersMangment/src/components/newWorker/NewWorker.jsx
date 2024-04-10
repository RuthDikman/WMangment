import * as React from "react";
import "./NewWorker.css";
import { Box } from "@mui/material";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import Stack from "@mui/joy/Stack";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Switch from "@mui/material/Switch";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GirlIcon from "@mui/icons-material/Girl";
import BoyIcon from "@mui/icons-material/Boy";
import { useEffect, useState, cloneElement } from "react";
import WorkerOptions from "../../store/WorkerOptions";
import { observer } from "mobx-react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";
import PositionsOptions from "../../store/PositionsOptions";
const NewWorker = observer(({ initialValues }) => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    tz: false,
    dateOfBirth: false,
    gender: false,
    roles: false,
    dateOfStartingWork: false,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState(
    initialValues || {
      workerId: -1,
      tz: "",
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      dateOfStartingWork: new Date(),
      gender: null,
      status: true,
      roles: [],
    }
  );
  const [positionData, setPositionData] = useState({
    JobPositionName: "",
    IsManagerial: false,
    DateStartRole: new Date(),
  });
  useEffect(() => {
    WorkerOptions.getWorkers();
    PositionsOptions.getPositions();
    const fetchData = async () => {
      if (initialValues) {
        const data = await initialValues;
        data.gender =
          data.gender == 2 || data.gender == "Female" ? "Female" : "Male";
        setUserData(data);
      } else {
        setUserData({
          workerId: -1,
          tz: "",
          firstName: "",
          lastName: "",
          dateOfBirth: new Date(),
          dateOfStartingWork: new Date(),
          gender: null,
          status: true,
          roles: [],
        });
      }
    };

    fetchData();
  }, [initialValues]);
  const existingWorker = WorkerOptions.listWorkers.find(
    (worker) => worker.tz === userData.tz
  );

  const handleMenuOpen = (event, newValue) => {
    const filteredRoles = userData.roles.filter((role) =>
      newValue.includes(role.JobPositionName)
    );
    setUserData((prevState) => ({
      ...prevState,
      roles: [...filteredRoles],
    }));
    if (filteredRoles.length != newValue.length) {
      setPositionData({
        JobPositionName: "",
        IsManagerial: false,
        DateStartRole: new Date(),
      });
      setPositionData({
        ...positionData,
        JobPositionName: newValue[newValue.length - 1],
      });
      setAnchorEl(document.getElementById("parentComp"));
    }
  };

  const handleSave = () => {
    const currentDate = new Date();
    const selectedStartDate = new Date(positionData.DateStartRole);
    if (selectedStartDate < currentDate) {
      setErrors({ ...errors, dateOfStartingWork: true });
      return;
    }
    const newPositionArray = [
      ...userData.roles,
      {
        JobPositionName: positionData.JobPositionName,
        IsManagerial: positionData.IsManagerial,
        DateStartRole: positionData.DateStartRole,
      },
    ];
    setUserData((prevState) => ({
      ...prevState,
      roles: newPositionArray,
    }));
    setAnchorEl(null);
  };
  const handleClosePosition = () => {
    setAnchorEl(null);
  };
  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "The details will not be saved!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#26a69a",
      confirmButtonText: "ok",
      cancelButtonColor: "#bdbdbd",
      customClass: {
        container: "swal-container",
        popup: "swal-popup",
        header: "swal-header",
        title: "swal-title",
        content: "swal-content",
        actions: "swal-actions",
        confirmButton: "swal-confirm",
        cancelButton: "swal-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
  };
  const handleFormSubmit = () => {
    const currentDate = new Date();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 80); // Minimum age: 80 years
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18); // Maximum age: 18 years
    if (existingWorker) {
      setErrors({ ...errors, tz: true });
      return;
    }
    if (
      Object.values(userData).some(
        (value) => typeof value === "string" && value.trim() === ""
      ) ||
      userData.tz.trim().length !== 9 ||
      !/^\d+$/.test(userData.tz.trim()) ||
      !userData.dateOfBirth ||
      new Date(userData.dateOfBirth) > maxDate ||
      new Date(userData.dateOfBirth) < minDate ||
      !userData.gender ||
      userData.roles.length === 0
    ) {
      setErrors({
        firstName:
          typeof userData.firstName === "string" &&
          userData.firstName.trim() === "",
        lastName:
          typeof userData.lastName === "string" &&
          userData.lastName.trim() === "",
        tz:
          userData.tz.trim().length !== 9 || !/^\d+$/.test(userData.tz.trim()),
        dateOfBirth:
          !userData.dateOfBirth ||
          new Date(userData.dateOfBirth) > maxDate ||
          new Date(userData.dateOfBirth) < minDate,
        gender: !userData.gender,
        roles: userData.roles.length === 0, // Error for roles selection
      });
      return;
    } else {
      if (initialValues) {
        WorkerOptions.updateWorker(userData);
      } else {
        WorkerOptions.postWorker(userData);
        console.log("yes");
      }
      let timerInterval;
      Swal.fire({
        title: "Updates employee details.",
        html: "This may take a few seconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {}, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
        customClass: {
          container: "swal-container",
          popup: "swal-popup",
          header: "swal-header",
          title: "swal-title",
          content: "swal-content",
          actions: "swal-actions",
          confirmButton: "swal-confirm",
          cancelButton: "swal-cancel",
        },
      }).then(() => {
        window.location.href = window.location.origin;
      });
    }
  };

  return (
    <Sheet className="sheet">
      <DialogTitle>
        <PersonAddIcon />
        Update Worker
      </DialogTitle>
      <Divider sx={{ mt: "0" }} />
      <DialogContent sx={{ gap: 2 }}>
        <Typography level="title-md" fontWeight="bold">
          Personal Information:
        </Typography>
        <Box sx={{ display: "grid", gap: 2 }}>
          <FormControl>
            <TextField
              label="First Name"
              value={userData.firstName || ""}
              onChange={(e) => {
                setUserData({ ...userData, firstName: e.target.value });
                setErrors({ ...errors, firstName: false });
              }}
              fullWidth
              required
              error={errors.firstName}
              helperText={errors.firstName ? "This field is required" : ""}
              inputProps={{ "aria-label": "description" }}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Last Name"
              value={userData.lastName || ""}
              onChange={(e) => {
                setUserData({ ...userData, lastName: e.target.value });
                setErrors({ ...errors, lastName: false });
              }}
              fullWidth
              required
              error={errors.lastName}
              helperText={errors.lastName ? "This field is required" : ""}
              inputProps={{ "aria-label": "description" }}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Tz"
              value={userData.tz || ""}
              onChange={(e) => {
                setUserData({ ...userData, tz: e.target.value });
                setErrors({ ...errors, tz: false });
              }}
              fullWidth
              required
              error={errors.tz}
              helperText={
                errors.tz ? (
                  existingWorker ? (
                    "This identity statement is registered in the system"
                ):
                  userData.tz.trim().length === 0 ? (
                    "This field is required"
                  ) : (
                    "Must enter 9 digits only"
                ))
                 : (
                  ""
                )
              }
              inputProps={{ "aria-label": "description" }}
            />
          </FormControl>
          <FormControl>
            <TextField
              label="Birthday"
              type="date"
              value={
                userData.dateOfBirth
                  ? new Date(userData.dateOfBirth).toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) => {
                setUserData({
                  ...userData,
                  dateOfBirth: new Date(e.target.value),
                });
                setErrors({ ...errors, dateOfBirth: false });
              }}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
              error={errors.dateOfBirth}
              helperText={
                errors.dateOfBirth
                  ? !userData.dateOfBirth
                    ? "This field is required"
                    : "Invalid date! Employee must be over 18 years old."
                  : ""
              }
            />
          </FormControl>
        </Box>
        <Typography level="title-md" fontWeight="bold">
          Gender:
        </Typography>
        <FormControl error={errors.gender}>
          <RadioGroup
            value={userData.gender || ""}
            onChange={(e) => {
              setUserData({ ...userData, gender: event.target.value });
              setErrors({ ...errors, gender: false });
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
                gap: 1,
                alignItems: "center",
                marginBottom: "2vw",
              }}
            >
              {[
                { name: "Male", icon: <BoyIcon /> },
                { name: "Female", icon: <GirlIcon /> },
              ].map((item) => (
                <Card
                  key={item.name}
                  sx={{
                    "&:hover": { bgcolor: "background.level1" },
                    width: "20px",
                    height: "20px",
                    borderRadius: "8px",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-evently",
                    }}
                  >
                    {cloneElement(item.icon, { sx: { fontSize: 30 } })}
                    <Typography variant="body2">{item.name}</Typography>
                  </CardContent>
                  <Radio
                    disableIcon
                    overlay
                    checked={userData.gender === item.name}
                    variant="outlined"
                    color="neutral"
                    value={item.name}
                    sx={{ mt: -2 }}
                    slotProps={{
                      action: {
                        sx: {
                          ...(userData.gender === item.name && {
                            border: "3px solid #26a69a",
                          }),
                          "&:hover": {
                            bgcolor: "transparent",
                          },
                        },
                      },
                    }}
                  />
                </Card>
              ))}
            </Box>
          </RadioGroup>
          {errors.gender && (
            <Typography sx={{ color: "red" }}>
              Please select a gender.
            </Typography>
          )}
        </FormControl>
        <Typography level="title-md" fontWeight="bold">
          Positions:
        </Typography>
        <FormControl error={errors.roles}>
          <div id="parentComp">
            <Autocomplete
              limitTags={2}
              multiple
              value={
                userData.roles
                  ? userData.roles.map((x) => x.JobPositionName)
                  : []
              }
              onChange={(event, newValue) => {
                handleMenuOpen(event, newValue);
                setErrors({ ...errors, roles: false });
              }}
              options={PositionsOptions.listPositions.map(
                (position) => position.name
              )}
              renderInput={(params) => (
                <TextField {...params} label="Add position..." />
              )}
            />
          </div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            MenuListProps={{
              "aria-labelledby": "menu-list-grow",
            }}
          >
            <MenuItem onClick={handleClosePosition}>
              <CloseIcon />
            </MenuItem>
            <MenuItem>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Non-Administrative</Typography>
                <Switch
                  checked={positionData.IsManagerial}
                  inputProps={{ "aria-label": "ant design" }}
                  onChange={(e) => {
                    console.log(e.target.checked);
                    setPositionData({
                      ...positionData,
                      IsManagerial: e.target.checked,
                    });
                  }}
                />
                <Typography>Administrative</Typography>
              </Stack>
            </MenuItem>
            <MenuItem>
              <TextField
                label="Start Date"
                type="date"
                value={positionData.DateStartRole.toISOString().split("T")[0]}
                onChange={(e) => {
                  setPositionData({
                    ...positionData,
                    DateStartRole: new Date(e.target.value),
                  });
                  setErrors({ ...errors, dateOfStartingWork: false });
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                required
                error={errors.dateOfStartingWork}
                helperText={
                  errors.dateOfStartingWork
                    ? positionData.dateOfStartingWork
                      ? "This field is required"
                      : "Invalid date! Date must be later."
                    : ""
                }
              />
            </MenuItem>
            <MenuItem
              onClick={handleSave}
              sx={{
                textAlign: "center",
                backgroundColor: "#e0f2f1",
                "&:hover": { backgroundColor: "#e0e0e0" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DoneAllIcon />
              SAVE
            </MenuItem>
          </Menu>
          {errors.roles && (
            <Typography sx={{ color: "red" }}>
              Please select at least one role.
            </Typography>
          )}
        </FormControl>
      </DialogContent>
      <Divider />
      <Stack direction="row" justifyContent="space-between">
        <Button variant="outlined" color="neutral" onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleFormSubmit} sx={{ backgroundColor: "#26a69a" }}>
          Update Worker
        </Button>
      </Stack>
    </Sheet>
  );
});

export default NewWorker;
