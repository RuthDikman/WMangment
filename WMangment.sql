USE [master]
GO
/****** Object:  Database [WManagement]    Script Date: 10/04/2024 13:22:53 ******/
CREATE DATABASE [WManagement]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WManagement', FILENAME = N'C:\Users\user\WManagement.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'WManagement_log', FILENAME = N'C:\Users\user\WManagement_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [WManagement] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WManagement].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WManagement] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WManagement] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WManagement] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WManagement] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WManagement] SET ARITHABORT OFF 
GO
ALTER DATABASE [WManagement] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [WManagement] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WManagement] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WManagement] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WManagement] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WManagement] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WManagement] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WManagement] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WManagement] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WManagement] SET  ENABLE_BROKER 
GO
ALTER DATABASE [WManagement] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WManagement] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WManagement] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WManagement] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WManagement] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WManagement] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [WManagement] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WManagement] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [WManagement] SET  MULTI_USER 
GO
ALTER DATABASE [WManagement] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WManagement] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WManagement] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WManagement] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [WManagement] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [WManagement] SET QUERY_STORE = OFF
GO
USE [WManagement]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [WManagement]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 10/04/2024 13:22:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 10/04/2024 13:22:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 10/04/2024 13:22:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[WorkerId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[TZ] [nvarchar](max) NOT NULL,
	[DateOfStartingWork] [datetime2](7) NOT NULL,
	[DateOfBirth] [datetime2](7) NOT NULL,
	[Gender] [int] NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[WorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Jobs]    Script Date: 10/04/2024 13:22:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Jobs](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Jobs] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WorkersJobs]    Script Date: 10/04/2024 13:22:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkersJobs](
	[JobPositionId] [int] IDENTITY(1,1) NOT NULL,
	[JobPositionName] [nvarchar](max) NOT NULL,
	[IsManagerial] [bit] NOT NULL,
	[DateStartRole] [datetime2](7) NOT NULL,
	[CustomerWorkerId] [int] NOT NULL,
 CONSTRAINT [PK_WorkersJobs] PRIMARY KEY CLUSTERED 
(
	[JobPositionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240408105925_migration', N'6.0.28')
GO
SET IDENTITY_INSERT [dbo].[Admin] ON 

INSERT [dbo].[Admin] ([Id], [UserName], [Password]) VALUES (1, N'Dan Lang', N'123')
SET IDENTITY_INSERT [dbo].[Admin] OFF
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 

INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (1, N'Ruth', N'Dikman', N'432195763', CAST(N'2024-03-08T11:05:49.0000000' AS DateTime2), CAST(N'2004-11-20T00:00:00.0000000' AS DateTime2), 2, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (2, N'Shulamit', N'Kolin', N'675921345', CAST(N'2024-04-08T11:18:02.5240000' AS DateTime2), CAST(N'2001-02-20T00:00:00.0000000' AS DateTime2), 2, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (3, N'Ayala', N'Tepp', N'975621435', CAST(N'2024-04-08T11:18:50.5590000' AS DateTime2), CAST(N'1997-02-13T00:00:00.0000000' AS DateTime2), 2, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (4, N'Tamar', N'Imanuhel', N'645297831', CAST(N'2024-01-08T11:19:39.0000000' AS DateTime2), CAST(N'1995-12-26T00:00:00.0000000' AS DateTime2), 2, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (5, N'Mehir', N'Dikman', N'765231495', CAST(N'2024-04-08T12:05:34.5760000' AS DateTime2), CAST(N'1997-12-24T00:00:00.0000000' AS DateTime2), 0, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (6, N'Sari', N'Porat', N'247941358', CAST(N'2023-07-08T17:19:05.0000000' AS DateTime2), CAST(N'2000-04-17T00:00:00.0000000' AS DateTime2), 2, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (9, N'Shmuel', N'Vales', N'375629184', CAST(N'2024-04-08T20:41:23.0690000' AS DateTime2), CAST(N'1995-02-20T00:00:00.0000000' AS DateTime2), 0, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (10, N'Avraham', N'Cohen', N'123456789', CAST(N'2024-04-09T22:43:54.5960000' AS DateTime2), CAST(N'2024-04-09T22:43:54.5960000' AS DateTime2), 0, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (11, N'Ester', N'Levi', N'954762345', CAST(N'2024-04-09T22:43:54.5960000' AS DateTime2), CAST(N'2024-04-09T22:43:54.5960000' AS DateTime2), 0, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (12, N'Chana', N'gggggg', N'954762345', CAST(N'2024-04-09T22:43:54.5960000' AS DateTime2), CAST(N'2024-04-09T22:43:54.5960000' AS DateTime2), 0, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (13, N'Rachel', N'Fridman', N'321465872', CAST(N'2024-04-09T23:00:34.2190000' AS DateTime2), CAST(N'1996-04-09T23:00:34.2190000' AS DateTime2), 0, 1)
INSERT [dbo].[Customers] ([WorkerId], [FirstName], [LastName], [TZ], [DateOfStartingWork], [DateOfBirth], [Gender], [Status]) VALUES (14, N'Sara', N'Shlomo', N'795132486', CAST(N'2024-04-09T23:09:33.9830000' AS DateTime2), CAST(N'1998-04-09T23:09:33.9830000' AS DateTime2), 0, 1)
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[Jobs] ON 

INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (1, N'Business Analyst')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (2, N'Database Administrator (DBA)')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (3, N'Data Scientist')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (4, N'DevOps Engineer')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (5, N'Human Resources (HR)')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (6, N'IT Manager')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (7, N'Localization Engineer')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (8, N'Product Manager')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (9, N'Project Manager')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (10, N'Quality Assurance Engineer (QA)')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (11, N'Releases Manager')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (12, N'Sales Engineer')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (13, N'Scrum Master')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (14, N'Security Engineer')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (15, N'Software Architect')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (16, N'Software Developer/Engineer')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (17, N'Super Technical')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (18, N'Systems Analyst')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (19, N'Team Leader')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (20, N'Technical Support Engineer')
INSERT [dbo].[Jobs] ([RoleId], [Name]) VALUES (21, N'UI/UX Designer')
SET IDENTITY_INSERT [dbo].[Jobs] OFF
GO
SET IDENTITY_INSERT [dbo].[WorkersJobs] ON 

INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (2, N'IT Manager', 1, CAST(N'2024-04-17T00:00:00.0000000' AS DateTime2), 2)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (3, N'Database Administrator (DBA)', 0, CAST(N'2024-04-25T00:00:00.0000000' AS DateTime2), 2)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (4, N'Data Scientist', 1, CAST(N'2024-04-28T00:00:00.0000000' AS DateTime2), 3)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (5, N'Team Leader', 1, CAST(N'2024-04-27T00:00:00.0000000' AS DateTime2), 3)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (6, N'Scrum Master', 1, CAST(N'2024-05-08T00:00:00.0000000' AS DateTime2), 3)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (7, N'Database Administrator (DBA)', 1, CAST(N'2024-04-28T00:00:00.0000000' AS DateTime2), 4)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (8, N'Business Analyst', 0, CAST(N'2024-04-28T00:00:00.0000000' AS DateTime2), 4)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (9, N'Business Analyst', 1, CAST(N'2024-04-09T00:00:00.0000000' AS DateTime2), 5)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (10, N'Localization Engineer', 1, CAST(N'2024-06-18T00:00:00.0000000' AS DateTime2), 6)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (15, N'Data Scientist', 1, CAST(N'2024-04-20T00:00:00.0000000' AS DateTime2), 9)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (16, N'Software Developer/Engineer', 0, CAST(N'2024-04-09T00:00:00.0000000' AS DateTime2), 1)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (17, N'string', 1, CAST(N'2024-04-09T22:43:54.5960000' AS DateTime2), 10)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (18, N'string', 1, CAST(N'2024-05-09T22:43:54.5960000' AS DateTime2), 11)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (19, N'string', 1, CAST(N'2024-05-09T22:43:54.5960000' AS DateTime2), 12)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (20, N'string', 1, CAST(N'2024-03-09T23:00:34.2190000' AS DateTime2), 13)
INSERT [dbo].[WorkersJobs] ([JobPositionId], [JobPositionName], [IsManagerial], [DateStartRole], [CustomerWorkerId]) VALUES (21, N'string', 1, CAST(N'2024-02-09T23:09:33.9830000' AS DateTime2), 14)
SET IDENTITY_INSERT [dbo].[WorkersJobs] OFF
GO
/****** Object:  Index [IX_WorkersJobs_CustomerWorkerId]    Script Date: 10/04/2024 13:22:53 ******/
CREATE NONCLUSTERED INDEX [IX_WorkersJobs_CustomerWorkerId] ON [dbo].[WorkersJobs]
(
	[CustomerWorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkersJobs]  WITH CHECK ADD  CONSTRAINT [FK_WorkersJobs_Customers_CustomerWorkerId] FOREIGN KEY([CustomerWorkerId])
REFERENCES [dbo].[Customers] ([WorkerId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[WorkersJobs] CHECK CONSTRAINT [FK_WorkersJobs_Customers_CustomerWorkerId]
GO
USE [master]
GO
ALTER DATABASE [WManagement] SET  READ_WRITE 
GO
