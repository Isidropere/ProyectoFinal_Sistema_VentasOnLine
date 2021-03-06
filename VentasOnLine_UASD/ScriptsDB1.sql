USE [PROYECTOVENTAS]
GO
/****** Object:  Table [dbo].[pagoconsulta]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[pagoconsulta](
	[in_id_pago] [int] NOT NULL,
	[cliente] [varchar](300) NULL,
	[tipo] [varchar](300) NULL,
	[documento] [varchar](300) NULL,
	[fecha] [datetime] NULL,
	[total] [decimal](20, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[in_id_pago] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  UserDefinedFunction [dbo].[PEDIDOXCLIENTEXTODOS]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create FUNCTION [dbo].[PEDIDOXCLIENTEXTODOS] (@prod varchar(300),@fecha datetime,@fecha2 datetime) 
RETURNS TABLE return 
select in_id_pago,cliente,tipo,documento,CONVERT(VARCHAR(19),fecha,103) as "Fecha",CONVERT(VARCHAR(19),total) as "Total" from pagoconsulta where cliente like '%'+@prod+'%' and fecha between @fecha and @fecha2  group by in_id_pago,cliente,tipo,documento,fecha,total

GO
/****** Object:  UserDefinedFunction [dbo].[PEDIDOXCOMPROBANTE]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create FUNCTION [dbo].[PEDIDOXCOMPROBANTE] (@prod varchar(300),@fecha datetime,@fecha2 datetime) 
RETURNS TABLE return 
select in_id_pago,cliente,tipo,documento,CONVERT(VARCHAR(19),fecha,103) as "Fecha",CONVERT(VARCHAR(19),total) as "Total" from pagoconsulta where documento like '%'+@prod+'%' and fecha between @fecha and @fecha2  group by in_id_pago,cliente,tipo,documento,fecha,total

GO
/****** Object:  Table [dbo].[DETALLEPAGO]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DETALLEPAGO](
	[in_id_pago] [int] NOT NULL,
	[idProducto] [int] NOT NULL,
	[cantidad] [int] NOT NULL,
	[precio] [decimal](6, 2) NOT NULL,
	[subtotal] [decimal](6, 2) NOT NULL,
	[estadoVentaxProd] [bit] NOT NULL,
 CONSTRAINT [pk_tb_ventaxprodu] PRIMARY KEY CLUSTERED 
(
	[in_id_pago] ASC,
	[idProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DocPaga]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DocPaga](
	[documentopaga] [int] NOT NULL,
	[descri] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[documentopaga] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PAGO]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PAGO](
	[in_id_pago] [int] IDENTITY(1,1) NOT NULL,
	[idUsuario] [int] NULL,
	[idCliente] [int] NULL,
	[in_id_tipopaVisa] [bit] NOT NULL,
	[in_id_tipopaMastercard] [bit] NOT NULL,
	[documentopaga] [int] NULL,
	[vc_dsc_numerotar] [varchar](50) NULL,
	[dt_fechaEmision] [date] NULL,
	[cvc] [char](4) NULL,
	[in_id_estado] [int] NULL,
	[fechaven] [date] NULL,
	[total] [decimal](20, 1) NULL,
PRIMARY KEY CLUSTERED 
(
	[in_id_pago] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tb_producto]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_producto](
	[idProducto] [int] IDENTITY(1,1) NOT NULL,
	[nomProducto] [varchar](60) NOT NULL,
	[descProducto] [text] NULL,
	[precioProducto] [decimal](16, 3) NOT NULL,
	[stockProducto] [int] NOT NULL,
	[idCategoria] [int] NOT NULL,
	[estadoProducto] [bit] NOT NULL,
	[imagen] [varbinary](1) NULL,
	[ruta_img] [varchar](300) NULL,
 CONSTRAINT [pk_tb_producto] PRIMARY KEY CLUSTERED 
(
	[idProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tb_usuario]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_usuario](
	[idUsuario] [int] IDENTITY(1,1) NOT NULL,
	[correoUsuario] [varchar](100) NOT NULL,
	[claveUsuario] [varchar](20) NOT NULL,
	[nombresUsuario] [varchar](50) NOT NULL,
	[apePatUsuario] [varchar](50) NOT NULL,
	[apeMatUsuario] [varchar](50) NOT NULL,
	[dniUsuario] [varchar](8) NOT NULL,
	[fecNacimientoUsuario] [date] NOT NULL,
	[telefonoUsuario] [varchar](11) NULL,
	[celularUsuario] [varchar](11) NULL,
	[idRol] [int] NOT NULL,
 CONSTRAINT [pk_tb_usuario] PRIMARY KEY CLUSTERED 
(
	[idUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  UserDefinedFunction [dbo].[PEDIDOXPRODUCTOXTODOS]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create FUNCTION [dbo].[PEDIDOXPRODUCTOXTODOS] (@prod varchar(300),@fecha datetime,@fecha2 datetime) 
RETURNS TABLE return 
select dp.in_id_pago, u.nombresUsuario + ' '+ u.apePatUsuario + ' ' + u.apeMatUsuario as 'Cliente',d.descri,p.dt_fechaEmision,p.total from detallepago dp inner join tb_producto pr on dp.idProducto = pr.idProducto inner join pago p on p.in_id_pago = dp.in_id_pago inner join DocPaga d on d.documentopaga=p.documentopaga inner join tb_usuario u on u.idUsuario=p.idCliente where pr.nomProducto like '%'+@prod+'%' and p.dt_fechaEmision between @fecha and @fecha2  group by dp.in_id_pago,d.descri,p.total, u.nombresUsuario,  u.apePatUsuario , u.apeMatUsuario,p.dt_fechaEmision

GO
/****** Object:  UserDefinedFunction [dbo].[PEDIDOXPRODUCTOXTODOS1]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create FUNCTION [dbo].[PEDIDOXPRODUCTOXTODOS1] (@prod varchar(300),@fecha datetime,@fecha2 datetime) 
RETURNS TABLE return 
select dp.in_id_pago, u.nombresUsuario + ' '+ u.apePatUsuario + ' ' + u.apeMatUsuario as 'Cliente',d.descri,CONVERT(VARCHAR(19),p.dt_fechaEmision) as "FECHA" ,CONVERT(VARCHAR(19),p.total) as "TOTAL" from detallepago dp inner join tb_producto pr on dp.idProducto = pr.idProducto inner join pago p on p.in_id_pago = dp.in_id_pago inner join DocPaga d on d.documentopaga=p.documentopaga inner join tb_usuario u on u.idUsuario=p.idCliente where pr.nomProducto like '%'+@prod+'%' and p.dt_fechaEmision between @fecha and @fecha2  group by dp.in_id_pago,d.descri,p.total, u.nombresUsuario,  u.apePatUsuario , u.apeMatUsuario,p.dt_fechaEmision

GO
/****** Object:  UserDefinedFunction [dbo].[TOPCLIENTES]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create function [dbo].[TOPCLIENTES](@prod int,@fecha datetime,@fecha2 datetime)
RETURNS TABLE return 
select TOP (@prod) in_id_pago,cliente,tipo,documento,CONVERT(VARCHAR(19),fecha,103) as "Fecha",CONVERT(VARCHAR(50),total) as "Total" from pagoconsulta where fecha between @fecha and @fecha2  group by in_id_pago,cliente,tipo,documento,fecha,total order by total desc

GO
/****** Object:  UserDefinedFunction [dbo].[TOPPRODUCTOS]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



create FUNCTION [dbo].[TOPPRODUCTOS] (@prod INT,@fecha datetime,@fecha2 datetime) 
RETURNS TABLE return 
select TOP (@prod) dp.idProducto, pr.nomProducto , CONVERT(VARCHAR(60),sum (precio*cantidad)) as "Total" from DETALLEPAGO dp  inner join tb_producto pr on dp.idProducto =pr.idProducto inner join pago pa on dp.in_id_pago=pa.in_id_pago where pa.dt_fechaEmision between @fecha and  @fecha2 group by dp.idProducto, pr.nomProducto  order by total desc

GO
/****** Object:  UserDefinedFunction [dbo].[REPORTPAGO]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create function [dbo].[REPORTPAGO] (@cliente varchar(300))
RETURNS TABLE return 
select p.in_id_pago,p.cliente,p.tipo,p.documento,pr.nomProducto,cantidad,CONVERT(VARCHAR(19),precio) as "precio" ,CONVERT(VARCHAR(19),p.fecha,103) as "Fecha" from pagoconsulta as p inner join DETALLEPAGO as dt on dt.in_id_pago=p.in_id_pago inner join tb_producto pr on dt.idProducto=pr.idProducto  where p.cliente like '%'+@cliente+'%'  and p.in_id_pago = (select max(in_id_pago) from pago)
GO
/****** Object:  UserDefinedFunction [dbo].[REPORPEDIDODOCUMENTO]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create FUNCTION [dbo].[REPORPEDIDODOCUMENTO] (@prod varchar(300),@fecha datetime,@fecha2 datetime) 
RETURNS TABLE return 
select in_id_pago,cliente,tipo,documento,CONVERT(VARCHAR(19),fecha,103) as "Fecha",CONVERT(VARCHAR(19),total) as "Total" from pagoconsulta where cliente like '%'+@prod+'%' and fecha between @fecha and @fecha2  group by in_id_pago,cliente,tipo,documento,fecha,total
GO
/****** Object:  Table [dbo].[tb_categoria]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_categoria](
	[CategoriaId] [int] NOT NULL,
	[descCategoria] [varchar](60) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[CategoriaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tb_rol]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_rol](
	[idRol] [int] IDENTITY(1,1) NOT NULL,
	[descRol] [varchar](60) NOT NULL,
	[estadoRol] [bit] NOT NULL,
 CONSTRAINT [pk_tb_rol] PRIMARY KEY CLUSTERED 
(
	[idRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tb_venta]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_venta](
	[idVenta] [int] IDENTITY(1,1) NOT NULL,
	[idUsuario] [int] NOT NULL,
	[fechaVenta] [datetime] NOT NULL,
	[estadoVenta] [bit] NOT NULL,
 CONSTRAINT [pk_tb_venta] PRIMARY KEY CLUSTERED 
(
	[idVenta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tb_ventaxproducto]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_ventaxproducto](
	[idVenta] [int] NOT NULL,
	[idProducto] [int] NOT NULL,
	[cantidad] [int] NOT NULL,
	[precio] [decimal](6, 2) NOT NULL,
	[subtotal] [decimal](6, 2) NOT NULL,
	[estadoVentaxProd] [bit] NOT NULL,
 CONSTRAINT [pk_tb_ventaxproducto] PRIMARY KEY CLUSTERED 
(
	[idVenta] ASC,
	[idProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (1, 16, 1, CAST(140.00 AS Decimal(6, 2)), CAST(140.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (1, 17, 1, CAST(110.00 AS Decimal(6, 2)), CAST(110.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (2, 9, 1, CAST(438.00 AS Decimal(6, 2)), CAST(438.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (2, 39, 1, CAST(266.00 AS Decimal(6, 2)), CAST(266.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (3, 42, 1, CAST(45.00 AS Decimal(6, 2)), CAST(45.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (3, 47, 1, CAST(311.00 AS Decimal(6, 2)), CAST(311.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (4, 17, 1, CAST(110.00 AS Decimal(6, 2)), CAST(110.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (4, 24, 1, CAST(1190.00 AS Decimal(6, 2)), CAST(1190.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (5, 14, 1, CAST(70.00 AS Decimal(6, 2)), CAST(70.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (6, 2, 2, CAST(58.00 AS Decimal(6, 2)), CAST(116.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (6, 4, 3, CAST(260.00 AS Decimal(6, 2)), CAST(780.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (6, 5, 1, CAST(735.00 AS Decimal(6, 2)), CAST(735.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (6, 8, 1, CAST(735.00 AS Decimal(6, 2)), CAST(735.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (7, 4, 1, CAST(260.00 AS Decimal(6, 2)), CAST(260.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (7, 18, 1, CAST(165.00 AS Decimal(6, 2)), CAST(165.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (7, 19, 1, CAST(175.00 AS Decimal(6, 2)), CAST(175.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (7, 22, 1, CAST(1316.00 AS Decimal(6, 2)), CAST(1316.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (7, 23, 1, CAST(420.00 AS Decimal(6, 2)), CAST(420.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (7, 45, 12, CAST(224.00 AS Decimal(6, 2)), CAST(2688.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (7, 47, 2, CAST(311.00 AS Decimal(6, 2)), CAST(622.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (8, 2, 1, CAST(58.00 AS Decimal(6, 2)), CAST(58.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (8, 3, 1, CAST(68.00 AS Decimal(6, 2)), CAST(68.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (9, 4, 1, CAST(260.00 AS Decimal(6, 2)), CAST(260.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (10, 18, 1, CAST(165.00 AS Decimal(6, 2)), CAST(165.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (10, 21, 1, CAST(2120.00 AS Decimal(6, 2)), CAST(2120.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (11, 18, 1, CAST(165.00 AS Decimal(6, 2)), CAST(165.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (11, 21, 1, CAST(2120.00 AS Decimal(6, 2)), CAST(2120.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (12, 46, 1, CAST(625.00 AS Decimal(6, 2)), CAST(625.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (13, 46, 1, CAST(625.00 AS Decimal(6, 2)), CAST(625.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (14, 27, 1, CAST(200.00 AS Decimal(6, 2)), CAST(200.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (15, 22, 1, CAST(1316.00 AS Decimal(6, 2)), CAST(1316.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (16, 26, 1, CAST(145.00 AS Decimal(6, 2)), CAST(145.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (17, 18, 1, CAST(165.00 AS Decimal(6, 2)), CAST(165.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (18, 18, 1, CAST(165.00 AS Decimal(6, 2)), CAST(165.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (18, 48, 1, CAST(574.00 AS Decimal(6, 2)), CAST(574.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (19, 18, 1, CAST(165.00 AS Decimal(6, 2)), CAST(165.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DETALLEPAGO] ([in_id_pago], [idProducto], [cantidad], [precio], [subtotal], [estadoVentaxProd]) VALUES (19, 46, 1, CAST(625.00 AS Decimal(6, 2)), CAST(625.00 AS Decimal(6, 2)), 1)
INSERT [dbo].[DocPaga] ([documentopaga], [descri]) VALUES (1, N'Cotizaciones')
INSERT [dbo].[DocPaga] ([documentopaga], [descri]) VALUES (2, N'Factura')
SET IDENTITY_INSERT [dbo].[PAGO] ON 

INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (1, NULL, 2, 1, 0, 1, N'159357123', CAST(N'2013-01-10' AS Date), N'256 ', 1, CAST(N'1994-06-29' AS Date), CAST(250.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (2, NULL, 3, 0, 1, 1, N'159357456', CAST(N'2013-02-10' AS Date), N'444 ', 1, CAST(N'1994-06-29' AS Date), CAST(954.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (3, NULL, 4, 1, 0, 1, N'5566565656', CAST(N'2013-03-10' AS Date), N'333 ', 1, CAST(N'1994-06-29' AS Date), CAST(1310.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (4, NULL, 5, 1, 0, 1, N'596663633', CAST(N'2013-04-10' AS Date), N'555 ', 1, CAST(N'1994-06-29' AS Date), CAST(2610.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (5, NULL, 6, 0, 1, 2, N'4442134', CAST(N'2013-05-10' AS Date), N'123 ', 1, CAST(N'1994-06-29' AS Date), CAST(2680.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (6, NULL, 8, 0, 1, 2, N'5464565446465', CAST(N'2020-09-10' AS Date), N'3233', 1, CAST(N'2021-09-09' AS Date), CAST(5046.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (7, NULL, 8, 0, 1, 2, N'787777878778788778778', CAST(N'2020-09-11' AS Date), N'6565', 1, CAST(N'2020-11-09' AS Date), CAST(10692.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (8, NULL, 8, 1, 0, 2, N'54645644654545465', CAST(N'2020-09-11' AS Date), N'4456', 1, CAST(N'2020-02-09' AS Date), CAST(10818.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (9, NULL, 8, 1, 0, 2, N'45646545646454564', CAST(N'2020-09-11' AS Date), N'4446', 1, NULL, CAST(11078.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (10, NULL, 8, 1, 0, 2, N'446546546454454', CAST(N'2020-09-11' AS Date), N'4545', 1, CAST(N'2020-11-09' AS Date), CAST(13363.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (11, NULL, 8, 1, 0, 2, N'446546546454454', CAST(N'2020-09-11' AS Date), N'4545', 1, CAST(N'2020-11-09' AS Date), CAST(15648.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (12, NULL, 8, 1, 0, 2, N'45465465487978789', CAST(N'2020-09-11' AS Date), N'4545', 1, CAST(N'2020-11-09' AS Date), CAST(16273.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (13, NULL, 8, 1, 0, 2, N'45465465487978789', CAST(N'2020-09-11' AS Date), N'4545', 1, CAST(N'2020-11-09' AS Date), CAST(16898.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (14, NULL, 8, 1, 0, 2, N'46546446546545645', CAST(N'2020-09-11' AS Date), N'6556', 1, CAST(N'2020-08-09' AS Date), CAST(17098.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (15, NULL, 8, 1, 0, 2, N'564366464565466', CAST(N'2020-09-11' AS Date), N'5654', 1, CAST(N'2020-03-09' AS Date), CAST(18414.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (16, NULL, 8, 1, 0, 2, N'46545465465465465465', CAST(N'2020-09-11' AS Date), N'6655', 1, CAST(N'2020-03-09' AS Date), CAST(18559.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (17, NULL, 8, 1, 0, 2, N'496456456456465465', CAST(N'2020-09-11' AS Date), N'2342', 1, CAST(N'2020-08-09' AS Date), CAST(18724.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (18, NULL, 8, 1, 0, 2, N'546546545465465465', CAST(N'2020-09-11' AS Date), N'5465', 1, CAST(N'2020-02-09' AS Date), CAST(19463.0 AS Decimal(20, 1)))
INSERT [dbo].[PAGO] ([in_id_pago], [idUsuario], [idCliente], [in_id_tipopaVisa], [in_id_tipopaMastercard], [documentopaga], [vc_dsc_numerotar], [dt_fechaEmision], [cvc], [in_id_estado], [fechaven], [total]) VALUES (19, NULL, 9, 1, 0, 2, N'42342342343233', CAST(N'2020-09-11' AS Date), N'2343', 1, CAST(N'2020-09-03' AS Date), CAST(20253.0 AS Decimal(20, 1)))
SET IDENTITY_INSERT [dbo].[PAGO] OFF
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (1, N'Jonathan Ricra Soto', N'VISA', N'Boleta', CAST(N'2020-09-10T00:00:00.000' AS DateTime), CAST(250.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (2, N'car car Soto', N'MASTER CARD', N'Factura', CAST(N'2020-09-10T00:00:00.000' AS DateTime), CAST(954.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (3, N'far far Soto', N'VISA', N'Factura', CAST(N'2020-09-10T00:00:00.000' AS DateTime), CAST(1310.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (4, N'arar arar Soto', N'VISA', N'Factura', CAST(N'2020-09-10T00:00:00.000' AS DateTime), CAST(2610.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (5, N'gar gar Soto', N'MASTER CARD', N'Factura', CAST(N'2020-09-10T00:00:00.000' AS DateTime), CAST(2680.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (6, N'Isidro Perez Alcantara', N'MASTER CARD', N'Factura', CAST(N'2020-09-10T00:00:00.000' AS DateTime), CAST(5046.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (7, N'Isidro Perez Alcantara', N'MASTER CARD', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(10692.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (8, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(10818.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (9, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(11078.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (10, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(13363.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (11, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(15648.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (12, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(16273.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (13, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(16898.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (14, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(17098.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (15, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(18414.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (16, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(18559.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (17, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(18724.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (18, N'Isidro Perez Alcantara', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(19463.00 AS Decimal(20, 2)))
INSERT [dbo].[pagoconsulta] ([in_id_pago], [cliente], [tipo], [documento], [fecha], [total]) VALUES (19, N'Freddy joel Virgil A', N'VISA', N'Factura', CAST(N'2020-09-11T00:00:00.000' AS DateTime), CAST(20253.00 AS Decimal(20, 2)))
INSERT [dbo].[tb_categoria] ([CategoriaId], [descCategoria]) VALUES (1, N'AUDÍFONOS')
INSERT [dbo].[tb_categoria] ([CategoriaId], [descCategoria]) VALUES (2, N'GAMEPADS / JOYSTICKS')
INSERT [dbo].[tb_categoria] ([CategoriaId], [descCategoria]) VALUES (3, N'MEMORIAS USB')
INSERT [dbo].[tb_categoria] ([CategoriaId], [descCategoria]) VALUES (4, N'MONITORES')
INSERT [dbo].[tb_categoria] ([CategoriaId], [descCategoria]) VALUES (5, N'MOUSE')
INSERT [dbo].[tb_categoria] ([CategoriaId], [descCategoria]) VALUES (6, N'PARLANTES')
INSERT [dbo].[tb_categoria] ([CategoriaId], [descCategoria]) VALUES (7, N'TECLADOS')
SET IDENTITY_INSERT [dbo].[tb_producto] ON 

INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (1, N'AUDIFONO BEATS AUDIO STUDIO HD OVER-EAR', N'Audífonos más ligeros, más atractivos, más resistentes y más confortables, con sonido de precisión, cancelación adaptiva de ruidos, batería recargable de 20 horas y RemoteTalk.
Disponible en 2 colores: rojo y blanco.', CAST(610.000 AS Decimal(16, 3)), 2, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (2, N'AURICULAR GAMING GENIUS H3-G500V', N'Auriculares para juegos con una función de vibración que los hace ideales para juegos en línea. El diseño ergonómico de la vincha incluye una esponja similar al cuero que los hace cómodos para el uso prolongado.
Intensidad de la vibración ajustable con el dispositivo de control en el cable', CAST(58.000 AS Decimal(16, 3)), 22, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (3, N'AUDIFONO CREATIVE HQ-1600', N'El diseño auricular de casco cerrado por la parte posterior cubre los oídos totalmente para reducir el ruido ambiental.
Los cascos con almohadillas suaves de cuero artificial permiten escuchar música con comodidad durante horas y horas.
Disponible en 5 colores.', CAST(68.000 AS Decimal(16, 3)), 0, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (4, N'AUDIFONO RAZER KRAKEN RZ12-870100', N'La sólida construcción de estos auriculares tiene un objetivo: durabilidad para resistir su uso diario, proporcionando la banda sonora que desees durante tus viajes cotidianos. Su diseño ligero hace que se puedan llevar por horas con total comodidad.
Almohadillas plegables para que sean compactos y puedas llevarlos a todas partes.
Disponible en 2 colores: verde y negro.', CAST(260.000 AS Decimal(16, 3)), 5, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (5, N'AURICULAR GAMING RAZER TIAMAT 7.1', N'Auriculares para juegos Razer Tiamat 7.1, con ellos dominarás los combates porque oirás los pasos de tu enemigo y localizarás su posición exacta. Diseñados para reproducir un audio de posición realista que te permita mejorar tu estrategia de juego.
Almohadillas de piel acolchadas para garantizar el uso cómodo y prolongado para no perderte ni un solo juego.
Puedes ajustar de forma fácil y precisa el nivel de cada canal de audio, posición y profundidad de los graves mediante la unidad de control incluída.', CAST(735.000 AS Decimal(16, 3)), 7, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (6, N'AURICULAR GAMING RAZER KRAKEN PRO 870300', N'Auriculares para juegos diseñados para lograr un ajuste ergonómico perfecto. Tienen un peso optimizado para poder usarlos por largos periodos y cuentan con un micrófono retráctil.
El diseño cerrado de las almohadillas crea un aislamiento acústico para que puedas concentrarte en el juego sin las molestias del ruido externo.
Disponible en 10 colores.', CAST(295.000 AS Decimal(16, 3)), 50, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (7, N'AURICULAR GAMING RAZER TIAMAT EXPERT 2.2 EPIC BASS', N'Auricular estéreo diseñado para jugar y optimizado con audio de posición para garantizar una inmersión completa en el juego.
Controladores de audio diseñados para imitar un efecto de sonido tridimensional que te permite meterte aún más en el juego.
Integra 2 controladores de sub-woofer para ofrecer mayor compatibilidad con los graves y un mejor rendimiento de audio general.', CAST(735.000 AS Decimal(16, 3)), 8, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (8, N'AURICULAR GAMING RAZER KRAKEN 7.1 CHROMA', N'Equipados con un avanzado motor de sonido envolvente virtual 7.1 que te sumerge en el juego. Presenta una capacidad de latencia de procesamiento de audio extremadamente baja y modula la fuente de audio para simular un sonido envolvente de 360º.
Paleta de colores personalizada y programada de forma exclusiva, efectos luminosos precargados, todo fácilmente accesible a través de Razer Synapse.', CAST(735.000 AS Decimal(16, 3)), 7, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (9, N'AURICULAR GAMING RAZER BLACKSHARK 720100 EXPERT 2.0', N'Diseño inspirado en auriculares de aviador usado por los pilotos de helicópteros de ataque. Proporcionan el nivel de comodidad necesario para soportar largos tiempos de misión.
Sellador de cuero sintético de auriculares, bloquea todo el ruido ambiental no deseado.', CAST(438.000 AS Decimal(16, 3)), 4, 1, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (10, N'GAMEPAD RAZER SABERTOOTH ELITE XBOX360', N'Mando con 6 botones adicionales: don en los gatillos de la parte superior y dos extraíbles en la parte baja del mando. Puedes reconfigurar los controles de cualquier parte del mando a estos botones multifunción ergonómicos.
Incluye un cable extraíble y superligero que se atornilla al mando con total seguridad y un estuche de transporte para llevarlo donde sea sin preocuparse por posibles roturas del cable.', CAST(305.000 AS Decimal(16, 3)), 15, 2, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (11, N'GAMEPAD MICROSOFT XBOX360', N'El controlador de Microsoft proporciona una experiencia de juego uniforme y universal en todos sus sistemas de juego. Disfruta de una experiencia de juego superior en Windows y Xbox360.
Respuesta vibratoria que garantiza un juego fascinante en todo momento.', CAST(120.000 AS Decimal(16, 3)), 20, 2, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (12, N'GAMEPAD WIRELESS MICROSOFT XBOX360', N'El controlador de Microsoft proporciona una experiencia de juego uniforme y universal en todos sus sistemas de juego. Disfruta de una experiencia de juego superior en Windows y Xbox360.
Respuesta vibratoria que garantiza un juego fascinante en todo momento.
Tecnología inalámbrica de alto rendimiento que permite controlar la acción a una distancia de hasta 9 metros.', CAST(175.000 AS Decimal(16, 3)), 15, 2, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (13, N'GAMEPAD WIRELESS ANTRYX XTREME G900 PC/PS2/PS3', N'Gamepad con un receptor 2.4GHz con cargador, amplia compatibilidad y efecto de vibración doble para sentir cada golpe, choque y explosión en juegos para PS2/PS3/PC(WinXP/WinVista/Win7/Win8/MacOSX/Linux)', CAST(58.000 AS Decimal(16, 3)), 5, 2, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (14, N'JOYSTICK GENIUS METAL STRIKE 3D TURBO', N'Ideal para los juegos de simulación de vuelo. Diseño a cuatro ejes y dispone de controles de alerón, elevación, aceleración y potencia.
Cuenta con 13 botones programables y un hat switch de 8 direcciones para cambiar los puntos de vista durante el vuelo.', CAST(70.000 AS Decimal(16, 3)), 1, 2, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (15, N'MEMORIA USB 4GB PATRIOT XPORTER BOOST', N'Lee velocidades superiores a 200x (30MB/s)
La carcasa de goma ofrece protección contra descargas (gotas) y daños por agua', CAST(60.000 AS Decimal(16, 3)), 2, 3, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (16, N'MEMORIA USB 3.0 16GB LACIE RUGGEDKEY', N'Diseñado para soportar caídas accidentales desde alturas mucho mayores a las que se suelen encontrar de camino a la oficina, resistencia al calor y al frío para proteger sus datos en los climas más extremos.
Su interfaz 3.0 permite obtener velocidades de hasta 150MB/s para realizar transferencias de archivos increíblemente rápidas', CAST(140.000 AS Decimal(16, 3)), 0, 3, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (17, N'MEMORIA USB 32GB HP V175W', N'Diseño duradero, compacto y elegante, resistente a los golpes y al agua.', CAST(110.000 AS Decimal(16, 3)), 0, 3, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (18, N'MEMORIA USB 3.0 64GB KINGSTON DTR30', N'Alto rendimiento conforme con las especificaciones USB 3.0, compatible también con puertos USB 2.0.
Cuerpo de caucho que lo hace resistente a golpes e impactos.', CAST(165.000 AS Decimal(16, 3)), 4, 3, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (19, N'MEMORIA USB 3.0 64GB KINGSTON DTR30G2', N'Robusto cuerpo de goma, certificado como resistente a golpes y al agua de modo que puede soportar sin daño golpes y rasguños mientras se está en movimiento.
Alto rendimiento conforme con las especificaciones USB 3.0, compatible también con puertos USB 2.0.', CAST(175.000 AS Decimal(16, 3)), 9, 3, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (20, N'MONITOR LED 24 BENQ XL2430T FULL HD GAMING', N'La tecnología Motion Blur Reduction de BenQ mejora la experiencia de juego, librándolo de imágenes borrosas sobre todos para los juegos FPS en los que cada milisegundo cuenta.
Tiempo de respuesta de 1ms GTG que significa velocidad para una experiencia visual de juego mejorada.', CAST(1700.000 AS Decimal(16, 3)), 1, 4, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (21, N'MONITOR LED 27 BENQ XL2720Z FULL HD 3D GAMING', N'La tecnología Motion Blur Reduction de BenQ mejora la experiencia de juego, librándolo de imágenes borrosas sobre todos para los juegos FPS en los que cada milisegundo cuenta.
Tiempo de respuesta de 1ms GTG que significa velocidad para una experiencia visual de juego mejorada.
Certificado por NVIDIA 3D Vision 2-ready con la nueva tecnología NVIDIA 3D LightBoost para que pueda disfrutar y experimentar los juegos con total realismo.', CAST(2120.000 AS Decimal(16, 3)), 0, 4, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (22, N'MONITOR LED 24 VIEWSONIC TD2420 MULTI TOUCH FHD', N'Pantalla LED intuitiva y multitáctil, con lápiz interactivo y resolución Full HD. Con tecnología óptica compatible con Windows8.
Dureza 7H de resistencia a ralladuras que asegura durabilidad y consistencia del producto, además de una experiencia táctil de alta calidad.', CAST(1316.000 AS Decimal(16, 3)), 5, 4, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (23, N'MONITOR LCD 18.5 HP PASSPORT 1912nm CON INTERNET', N'Acceso rápido, seguro y sencillo a internet sin necesidad de un equipo. Experiencia de navegación accesible para el usuario con una solución económica y sin equipo fácil de configurar, usar y mantener.
Cuenta con un navegador Adobe Flash, 5 puertos USB, reproductor multimedia, además de teclado y mouse', CAST(420.000 AS Decimal(16, 3)), 0, 4, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (24, N'MONITOR LED 15.6 PARA PS3/XBOX360 c/MALETIN MOVIL', N'Estuche de transporte con una pantalla portátil con resolución HD de 720p, con altavoces para conectar a la consola, es la manera más fácil de llevar tu consola a donde sea que vayas, si se trata de una PlayStation3 o una Xbox360', CAST(1190.000 AS Decimal(16, 3)), 1, 4, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (25, N'MOUSE GAMING ANTRYX XTREME ZIGRA', N'Mouse gamer con diseño ergonómico, 9 botones programables con 3 perfiles configurables, sensor óptico Avago 305 de alta precisión, 7 multicolor LED intercambiables, 4000dpi.', CAST(90.000 AS Decimal(16, 3)), 7, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (26, N'MOUSE GAMING GENIUS GX DEATHTAKER PROFESIONAL', N'Mouse laser profesional para juegos MMO/RTS, incluye una unidad aceleradora SCGii para un rango dpi desde 100 hasta 5700, con tiempo de respuesta de 1ms.
Tiempo de vida de 8 millones de clicks, diseño con peso ajustable que incluye 6 pesos metálicos, cada uno de 4,5 gramos.', CAST(145.000 AS Decimal(16, 3)), 14, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (27, N'MOUSE GAMING GENIUS GX GILA PROFESIONAL', N'Mouse laser profesional para juegos MMO/RTS. Cómodo para usar y con un diseño que permite configurar hasta 12 botones. Incluye una unidad aceleradora SG Core ii para un rango dpi desde 200 hasta 8200, con tiempo de respuesta de 1ms.
Tiempo de vida de 8 millones de clicks, diseño con peso ajustable que incluye 6 pesos metálicos, cada uno de 4,5 gramos.', CAST(200.000 AS Decimal(16, 3)), 14, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (28, N'MOUSE GAMING RAZER DEATHADDER', N'Mouse con diseño ergonómico que ofrece una comodidad óptima para el juego intenso y prolongado.
Sensor infrarojo 3.5G de 3500 ppp, respuesta de 1ms', CAST(195.000 AS Decimal(16, 3)), 2, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (29, N'MOUSE GAMING RAZER NAGA 20147 EXPERT MMO', N'Mouse con diseño ergonómico que garantiza que cualquier tamaño y forma de mano se adapte con el máximo comfort. Su rueda de desplazamiento se mueve de izquierda a derecha así como arriba abajo y hacia dentro.', CAST(330.000 AS Decimal(16, 3)), 10, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (30, N'MOUSE GAMING RAZER NAGA HEX', N'Mouse con diseño ergonómico curvo que ha probado reducir el cansancio durante periodos prolongados de juego.
Cuenta con 6 botones mecánicos optimizados para juegos MOBA/RPG.
Vida útil de hasta 10 millones de clicks y capacidad de registrar con precisión hasta 250 clicks por minuto.', CAST(285.000 AS Decimal(16, 3)), 13, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (31, N'MOUSE GAMING BLUETOOTH RAZER OROCHI ELITE', N'Mouse de pequeño tamaño que incluye un sensor láser y funcionalidad de dos modos: cableado e inalámbrico.
Gracias a la compatibilidad Bluetooth integrada para la mayoría de portátiles, ofrece la comodidad de evitar los cables cuando se viaja.', CAST(285.000 AS Decimal(16, 3)), 15, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (32, N'MOUSE GAMING WIRELESS RAZER NAGA EPIC CHROMA', N'Cuenta con un total de 19 botones programables para maximizar las acciones a tu disposición.
Iluminación personalizable Chroma en la rueda de desplazamiento y la retícula para el pulgar.', CAST(478.000 AS Decimal(16, 3)), 20, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (33, N'MOUSE GAMING WIRELESS RAZER OUROBOROS ELITE', N'Equipado con el sensor más avanzado y configurable de 8200dpi 4G, con respuesta de 1ms.
Cuando su batería se agota, sólo se conecta el cable USB para mantener el juego mientras se carga.', CAST(529.000 AS Decimal(16, 3)), 13, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (34, N'MOUSE NB WIRELESS MICROSOFT MOBILE 4000', N'Mouse inalámbrico, compacto y deportivo. Permite controlar el ordenador a una distancia de hasta 30 metros.
Indicador de estado de la batería cuando ésta esté baja, utilizable hasta un máximo de 10 meses sin tener que cambiar las pilas.', CAST(99.000 AS Decimal(16, 3)), 5, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (35, N'MOUSE WIRELESS GENIUS TRAVELER NX-6510 TATTOO', N'Mouse "óptico ecológico" que utiliza un sensor infrarojo que reduce el voltaje y permite su funcionamiento con menores requerimientos de energía. Capaz de funcionar hasta 10 metros de distancia.
Con tan solo una batería AA se puede usar hasta 18 meses.', CAST(35.000 AS Decimal(16, 3)), 25, 5, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (36, N'PARLANTE 2.0 CREATIVE GIGAWORKS T40', N'Sistema de altavoces de gama alta en dos piezas diseñado para ofrecer el placer musical en estado puro.
Conos de graves de calidad profesional y conos de agudos de alta tecnología en configuración MTM para un equilibrio acústico óptimo.', CAST(495.000 AS Decimal(16, 3)), 5, 6, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (37, N'PARLANTE 2.0 F&D R50 MADERA DE ALTA FIDELIDAD', N'Ofrece el equilibrio perfecto entre la precisión musical de alto rendimiento en una carcaza muy bien acabada de verdadera madera que se verá muy bien en su casa y produce una coloración menos audible.
Amplificadores separados para graves y agudos, así como controlador protegido magnéticamente aseguran baja distorsión en la salida del audio.', CAST(301.000 AS Decimal(16, 3)), 5, 6, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (38, N'PARLANTE 2.0 GENIUS SP-T1200', N'Sistema de altavoces 2.0 con un panel táctil. Con solo tocar el control de volumen, graves o agudos y mover su dedo sobre la barra deslizadora, se puede ajustar el nivel de estas funciones.
Potencia de salida de 30 watts.', CAST(80.000 AS Decimal(16, 3)), 5, 6, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (39, N'PARLANTE 5.1 CREATIVE INSPIRE T6300', N'Audio de espectro completo que incluye graves medios mejorados y una organización acústica sorprendentemente precisa. Combinado con un subwoofer con puerto de graves y salida inferior, permite producir graves medios más sonoros y pronunciados.', CAST(266.000 AS Decimal(16, 3)), 9, 6, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (40, N'PARLANTE 5.1 F&D F333U USB/SD R-FM c/Remoto', N'Diseño de grilla de metal única con forma de rombo.
Cuenta con Plug&Play USB y lector de tarjetas SD, además de radio FM que puede almacenar hasta 100 estaciones de radio.
Gabinete de madera que proporciona baja distorsión y graves de calidad.', CAST(360.000 AS Decimal(16, 3)), 5, 6, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (41, N'PARLANTE 5.1 F&D F6000U USB/SD R-FM', N'Sistema de altavoces con paneles de alto brillo. El lector USB y de tarjetas SD, y la radio FM con pantalla LED permiten disfrutar de la música en cualquier momento y cualquier lugar.', CAST(530.000 AS Decimal(16, 3)), 2, 6, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (42, N'PARLANTES GENIUS SP-i160 MOVIL/iPOD/Mp3/Mp4', N'Parlantes portátiles de hasta 8 horas de duración gracias a la batería incorporada. Estructura metálica flexible con una unidad metálica de 1.25" para lograr un sonido más potente que los parlantes ordinarios.
Disponible en 2 colores: blanco y negro', CAST(45.000 AS Decimal(16, 3)), 4, 6, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (43, N'PARLANTES USB GAMING RAZER FEROX', N'Potentes parlantes con resonancia ampliada, sonido omnidireccional de 360º, hasta 12 horas de funcionamiento continuo.
Gracias a sus cámaras de resonancia ampliadas y a una construcción de bocina exclusiva, ofrece una acústica sorprendente y bajos de gran calidad para la mejor experiencia sonora.', CAST(186.000 AS Decimal(16, 3)), 10, 6, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (44, N'TECLADO GAMING ANTRYX XTREME LEPTOM', N'Teclado para juegos con diseño extra sólido y base de metal. Posee 3 tipos de iluminación LED cambiables, 10 teclas Anti-Ghosting, 4 velocidades en Modo juego y grabado laser en todas las teclas que evita el desgaste. Sensor gamer de 0.01s de respuesta y resistencia al agua.', CAST(73.000 AS Decimal(16, 3)), 10, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (45, N'TECLADO GAMING GENIUS MANTICORE SP', N'Moderno teclado para juegos con sistema de retroiluminación con alta precisión.
Cuenta con una paleta de 16 millones de colores de retroiluminación para elegir su color favorito, además de ajustar el brillo en 4 niveles. Incluye 8 teclas macro convenientemente ubicadas que permiten asignar hasta 24 comandos distintos.', CAST(224.000 AS Decimal(16, 3)), -2, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (46, N'TECLADO GAMING LOGITECH G19s LCD', N'Teclado para juegos con pantalla LCD a todo color para ver datos de juego vitales, estado de sistema y mucho más. 12 teclas G permiten usar hasta 36 funciones programables. Cuenta con 2 puertos USB de alta velocidad.', CAST(625.000 AS Decimal(16, 3)), 0, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (47, N'TECLADO GAMING RAZER DEATHSTALKER EXPERT', N'Teclado con capacidades Anti-Ghosting y macros personalizados. Retroiluminación verde y teclas compactas tipo chicle de 2mm para garantizar la activación de cada tecla en el menor tiempo.', CAST(311.000 AS Decimal(16, 3)), 4, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (48, N'TECLADO GAMING RAZER BLACKWIDOW ULTIMATE SP', N'Teclado diseñado específicamente para los juegos, con los nuevos interruptores mecánicos que actúan a una distancia óptima y ofrecen velocidad y capacidad de respuesta incomparable. Las teclas con retroiluminación individual garantizan un juego de calidad en condiciones de baja iluminación.', CAST(574.000 AS Decimal(16, 3)), 4, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (49, N'TECLADO GAMING RAZER DEATHSTALKER ULTIMATE ELITE', N'Teclado con 10 teclas táctiles de adaptación dinámica y un panel LCD. Enlaza un número ilimitado de comandos, macros y habilidades que necesites para 10 teclas táctiles que cambian para adaptarse a la situación en el juego. Las funciones de la pantalla LCD como una pantalla separada que muestra información del juego o los widgets de aplicaciones, lo que permite mantenerse delante de la competencia.', CAST(960.000 AS Decimal(16, 3)), 2, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (50, N'TECLADO GAMING GENIUS ERGOMEDIA 500', N'Pad para juegos con configuración clara y simple, que puedes usar en gran variedad de juegos. El diseño único en forma de una mano es ideal para jugar durante mucho tiempo. Especialmente iluminado para asegurar que puedas ver las techas en la noche.
Tres configuraciones diferentes y un botón adicional que te deja saltar dentro de diferentes juegos de manera inmediata.', CAST(93.000 AS Decimal(16, 3)), 5, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (51, N'TECLADO GAMING RAZER ORBWEAVER ELITE MECHANICAL', N'Su tecnología de teclas mecánicas ofrece una particular respuesta táctil, en la forma de un ligero golpe y click en la punta de los dedos, brindando una sensación completamente nueva durante el juego. Cada tecla tiene una fuerza de activación optimizada de 50g y distancia de activación reducida de 2mm.', CAST(445.000 AS Decimal(16, 3)), 6, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (52, N'TECLADO LOGITECH MEDIA K200', N'Resistente teclado de tamaño normal para realizar las actividades más frecuentes, con una sola pulsación para acceder inmediatamente a funciones de reproducción/pausa, volumen, mute, internet, correo electrónico, etc.', CAST(311.000 AS Decimal(16, 3)), 7, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (53, N'TECLADO MICROSOFT COMFORT CURVE 3000', N'Aprobado ergonométricamente, ayuda brindando una posición más natural a las muñecas que se siente cómodo desde el primer uso. El diseño delgado ahorra espacio en su escritorio. Cómodas teclas de acceso multimedia.', CAST(64.000 AS Decimal(16, 3)), 8, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (54, N'TECLADO MICROSOFT NATURAL ERGONOMIC 4000', N'Teclado con diseño ergonómico que favorece la alineación natural de la muñeca y el brazo para trabajar sin molestias. Teclado de acceso rápido personalizable, ejecute tareas como abrir documentos y responder correos electrónicos con solo tocar un botón.', CAST(128.000 AS Decimal(16, 3)), 5, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (55, N'TECLADO WIRELESS LOGITECH K270', N'Tecnología inalámbrica fiable dondequiera que se use el teclado gracias al receptor Logitech Unifying. La conexión inalámbrica elimina casi por completo retrasos, interrupciones e interferencias con un alcance de hasta 10 metros.
Recubrimiento especial que protege las teclas del desgaste.', CAST(61.000 AS Decimal(16, 3)), 2, 7, 1, NULL, NULL)
INSERT [dbo].[tb_producto] ([idProducto], [nomProducto], [descProducto], [precioProducto], [stockProducto], [idCategoria], [estadoProducto], [imagen], [ruta_img]) VALUES (56, N'TECLADO WIRELESS MICROSOFT ALL-IN-ONE MEDIA', N'Teclado que cuenta con un conjunto de teclas de tamaño completo y una almohadilla multitáctil que le permitirá deslizar los dedos, arrastrar, acercar o alejar y hacer click fácilmente. Teclas de acceso rápido multimedia personalizables. Además cuenta con un diseño resistente a prueba de golpes, caídas o derrames.', CAST(134.000 AS Decimal(16, 3)), 2, 7, 1, NULL, NULL)
SET IDENTITY_INSERT [dbo].[tb_producto] OFF
SET IDENTITY_INSERT [dbo].[tb_rol] ON 

INSERT [dbo].[tb_rol] ([idRol], [descRol], [estadoRol]) VALUES (1, N'Cliente', 1)
INSERT [dbo].[tb_rol] ([idRol], [descRol], [estadoRol]) VALUES (2, N'Administrador', 1)
INSERT [dbo].[tb_rol] ([idRol], [descRol], [estadoRol]) VALUES (3, N'Gerente', 1)
SET IDENTITY_INSERT [dbo].[tb_rol] OFF
SET IDENTITY_INSERT [dbo].[tb_usuario] ON 

INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (1, N'gerente@hotmail.com', N'123', N'Isidro', N'Perez', N'Barriquera', N'75214857', CAST(N'1994-12-15' AS Date), N'8095603631', N'8095603632', 3)
INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (2, N'lomax_56@hotmail.com', N'123', N'Jonathan', N'Ricra', N'Santos', N'76276847', CAST(N'1994-12-15' AS Date), N'8095603633', N'8095603634', 1)
INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (3, N'car@hotmail.com', N'123', N'Calors', N'Mendez', N'Montilla', N'76276841', CAST(N'1994-12-15' AS Date), N'8095603635', N'8095603635', 1)
INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (4, N'far@hotmail.com', N'123', N'Manuel', N'Santos', N'Uribe', N'76276842', CAST(N'1994-12-15' AS Date), N'8095603636', N'8095603636', 1)
INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (5, N'arar@hotmail.com', N'123', N'Laura', N'Salazar', N'Moya', N'76276843', CAST(N'1994-12-15' AS Date), N'8095603637', N'8095603637', 1)
INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (6, N'gar@hotmail.com', N'123', N'Gardo', N'Gimenez', N'Balenzuela', N'76275841', CAST(N'1994-12-15' AS Date), N'8095603638', N'8095603638', 1)
INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (7, N'i201312423@cibertec.edu.pe', N'123', N'Jonathan', N'Ricar', N'Soto', N'76158498', CAST(N'1994-12-15' AS Date), N'8095603639', N'993701782', 2)
INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (8, N'isidro17pereza@gmail.com', N'@Zion12345', N'Isidro', N'Perez', N'Alcantara', N'00115899', CAST(N'0001-01-01' AS Date), N'8095603610', N'8095603610', 1)
INSERT [dbo].[tb_usuario] ([idUsuario], [correoUsuario], [claveUsuario], [nombresUsuario], [apePatUsuario], [apeMatUsuario], [dniUsuario], [fecNacimientoUsuario], [telefonoUsuario], [celularUsuario], [idRol]) VALUES (9, N'fredyj@gmail.com', N'1234', N'Freddy joel', N'Virgil', N'A', N'00112589', CAST(N'0001-01-01' AS Date), N'829919516', N'8299195166', 1)
SET IDENTITY_INSERT [dbo].[tb_usuario] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__tb_usuar__2CB1748FEFADC460]    Script Date: 9/12/2020 9:17:26 AM ******/
ALTER TABLE [dbo].[tb_usuario] ADD  CONSTRAINT [UQ__tb_usuar__2CB1748FEFADC460] UNIQUE NONCLUSTERED 
(
	[correoUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__tb_usuar__A6BF9957A3DD0DEF]    Script Date: 9/12/2020 9:17:26 AM ******/
ALTER TABLE [dbo].[tb_usuario] ADD  CONSTRAINT [UQ__tb_usuar__A6BF9957A3DD0DEF] UNIQUE NONCLUSTERED 
(
	[dniUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DETALLEPAGO] ADD  DEFAULT ((1)) FOR [estadoVentaxProd]
GO
ALTER TABLE [dbo].[PAGO] ADD  DEFAULT (getdate()) FOR [dt_fechaEmision]
GO
ALTER TABLE [dbo].[tb_producto] ADD  DEFAULT ((1)) FOR [estadoProducto]
GO
ALTER TABLE [dbo].[tb_rol] ADD  DEFAULT ((1)) FOR [estadoRol]
GO
ALTER TABLE [dbo].[tb_venta] ADD  DEFAULT ((1)) FOR [estadoVenta]
GO
ALTER TABLE [dbo].[tb_ventaxproducto] ADD  DEFAULT ((1)) FOR [estadoVentaxProd]
GO
ALTER TABLE [dbo].[DETALLEPAGO]  WITH CHECK ADD  CONSTRAINT [fk_tb_ventaxproducto_tb_produc] FOREIGN KEY([idProducto])
REFERENCES [dbo].[tb_producto] ([idProducto])
GO
ALTER TABLE [dbo].[DETALLEPAGO] CHECK CONSTRAINT [fk_tb_ventaxproducto_tb_produc]
GO
ALTER TABLE [dbo].[DETALLEPAGO]  WITH CHECK ADD  CONSTRAINT [fk_tb_ventaxproducto_tb_ven] FOREIGN KEY([in_id_pago])
REFERENCES [dbo].[PAGO] ([in_id_pago])
GO
ALTER TABLE [dbo].[DETALLEPAGO] CHECK CONSTRAINT [fk_tb_ventaxproducto_tb_ven]
GO
ALTER TABLE [dbo].[PAGO]  WITH CHECK ADD FOREIGN KEY([documentopaga])
REFERENCES [dbo].[DocPaga] ([documentopaga])
GO
ALTER TABLE [dbo].[PAGO]  WITH CHECK ADD  CONSTRAINT [FK__PAGO__idCliente__4AB81AF0] FOREIGN KEY([idCliente])
REFERENCES [dbo].[tb_usuario] ([idUsuario])
GO
ALTER TABLE [dbo].[PAGO] CHECK CONSTRAINT [FK__PAGO__idCliente__4AB81AF0]
GO
ALTER TABLE [dbo].[PAGO]  WITH CHECK ADD  CONSTRAINT [FK__PAGO__idUsuario__4BAC3F29] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[tb_usuario] ([idUsuario])
GO
ALTER TABLE [dbo].[PAGO] CHECK CONSTRAINT [FK__PAGO__idUsuario__4BAC3F29]
GO
ALTER TABLE [dbo].[tb_producto]  WITH CHECK ADD  CONSTRAINT [fk_tb_producto_tb_categoria] FOREIGN KEY([idCategoria])
REFERENCES [dbo].[tb_categoria] ([CategoriaId])
GO
ALTER TABLE [dbo].[tb_producto] CHECK CONSTRAINT [fk_tb_producto_tb_categoria]
GO
ALTER TABLE [dbo].[tb_usuario]  WITH CHECK ADD  CONSTRAINT [fk_tb_usuario_tb_rol] FOREIGN KEY([idRol])
REFERENCES [dbo].[tb_rol] ([idRol])
GO
ALTER TABLE [dbo].[tb_usuario] CHECK CONSTRAINT [fk_tb_usuario_tb_rol]
GO
ALTER TABLE [dbo].[tb_venta]  WITH CHECK ADD  CONSTRAINT [fk_tb_producto_tb_usuario] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[tb_usuario] ([idUsuario])
GO
ALTER TABLE [dbo].[tb_venta] CHECK CONSTRAINT [fk_tb_producto_tb_usuario]
GO
ALTER TABLE [dbo].[tb_ventaxproducto]  WITH CHECK ADD  CONSTRAINT [fk_tb_ventaxproducto_tb_producto] FOREIGN KEY([idProducto])
REFERENCES [dbo].[tb_producto] ([idProducto])
GO
ALTER TABLE [dbo].[tb_ventaxproducto] CHECK CONSTRAINT [fk_tb_ventaxproducto_tb_producto]
GO
ALTER TABLE [dbo].[tb_ventaxproducto]  WITH CHECK ADD  CONSTRAINT [fk_tb_ventaxproducto_tb_venta] FOREIGN KEY([idVenta])
REFERENCES [dbo].[tb_venta] ([idVenta])
GO
ALTER TABLE [dbo].[tb_ventaxproducto] CHECK CONSTRAINT [fk_tb_ventaxproducto_tb_venta]
GO
/****** Object:  StoredProcedure [dbo].[ppago5]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create proc [dbo].[ppago5]
as
declare 
@tipo varchar(100)
if exists(select * from PAGO where in_id_tipopaVisa  = 1 )
begin

set @tipo='VISA'
 insert into pagoconsulta(in_id_pago,cliente,tipo,documento,fecha,total)
select p.in_id_pago  , u.nombresUsuario + ' '+ u.apePatUsuario + ' ' + u.apeMatUsuario as 'Cliente', @tipo,d.descri ,p.dt_fechaEmision ,total from pago p inner join  detallepago dt on p.in_id_pago = dt.in_id_pago inner join tb_producto pr on pr.idProducto = dt.idProducto inner join DocPaga d on d.documentopaga=p.documentopaga inner join tb_usuario u on u.idUsuario=p.idCliente where pr.descProducto like '%%' and in_id_tipopaVisa  = 1   and p.in_id_pago = (select max(in_id_pago) from PAGO)group by p.in_id_pago,p.dt_fechaEmision,u.nombresUsuario, u.apePatUsuario , u.apeMatUsuario,d.descri,total 


end
if exists(select * from PAGO where in_id_tipopaMastercard  = 1 )
begin
set @tipo='MASTER CARD'
 insert into pagoconsulta(in_id_pago,cliente,tipo,documento,fecha,total)
  select p.in_id_pago  , u.nombresUsuario + ' '+ u.apePatUsuario + ' ' + u.apeMatUsuario as 'Cliente', @tipo ,d.descri ,p.dt_fechaEmision ,total from pago p inner join  detallepago dt on p.in_id_pago = dt.in_id_pago inner join tb_producto pr on pr.idProducto = dt.idProducto inner join DocPaga d on d.documentopaga=p.documentopaga inner join tb_usuario u on u.idUsuario=p.idCliente where pr.descProducto like '%%' and  in_id_tipopaMastercard  = 1   and p.in_id_pago = (select max(in_id_pago) from PAGO) group by p.in_id_pago,p.dt_fechaEmision,u.nombresUsuario, u.apePatUsuario , u.apeMatUsuario,d.descri,total

end

GO
/****** Object:  StoredProcedure [dbo].[registrarDetallePago]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[registrarDetallePago](
@idVenta INT,
@idProducto INT,
@cantidad INT,
@precio DECIMAL(6,2)
)
AS
BEGIN
INSERT INTO DETALLEPAGO(in_id_pago,idProducto,cantidad,precio,subtotal,estadoVentaxProd)
	VALUES(@idVenta,@idProducto,@cantidad,@precio,@cantidad*@precio,1)

UPDATE tb_producto
SET stockProducto = stockProducto-@cantidad
WHERE idProducto = @idProducto
update pago
set total = (select Round((sum(precio * cantidad)),2) from detallepago)
 where in_id_pago = (select max(in_id_pago) from pago)
END

GO
/****** Object:  StoredProcedure [dbo].[registrarDetalleVenta]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[registrarDetalleVenta](
@idVenta INT,
@idProducto INT,
@cantidad INT,
@precio DECIMAL(6,2)
)
AS
BEGIN
INSERT INTO tb_ventaxproducto(idVenta,idProducto,cantidad,precio,subtotal,estadoVentaxProd)
	VALUES(@idVenta,@idProducto,@cantidad,@precio,@cantidad*@precio,1)

UPDATE tb_producto
SET stockProducto = stockProducto-@cantidad
WHERE idProducto = @idProducto
END

GO
/****** Object:  StoredProcedure [dbo].[registrarPago]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create PROCEDURE [dbo].[registrarPago](
@idUsuario INT,
@tipo bit,
@tipo2 bit,
@tarjeta varchar (100),
@fechaven date,
@cvc char(4),
@doc int
)
AS
BEGIN
INSERT INTO PAGO(idUsuario,idCliente, in_id_tipopaVisa,in_id_tipopaMastercard ,vc_dsc_numerotar , fechaven ,cvc , dt_fechaEmision,in_id_estado,documentopaga)
	VALUES(null,@idUsuario,@tipo,@tipo2,@tarjeta,@fechaven,@cvc, GETDATE(),1,@doc)
	
	
END

GO
/****** Object:  StoredProcedure [dbo].[registrarUsuario]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE PROCEDURE [dbo].[registrarUsuario](
@correoUsuario VARCHAR(100),
@claveUsuario VARCHAR(20),
@nombresUsuario VARCHAR(50),
@apePatUsuario VARCHAR(50),
@apeMatUsuario VARCHAR(50),
@dniUsuario VARCHAR(8),
@fecNacimientoUsuario DATE,
@telefonoUsuario VARCHAR(9),
@celularUsuario VARCHAR(11),
@idRol INT
)
AS
BEGIN
	INSERT INTO tb_usuario(correoUsuario,claveUsuario,nombresUsuario,apePatUsuario,
						apeMatUsuario,dniUsuario,fecNacimientoUsuario,telefonoUsuario,
						celularUsuario,idRol)
	VALUES (@correoUsuario,@claveUsuario,@nombresUsuario,@apePatUsuario,
						@apeMatUsuario,@dniUsuario,@fecNacimientoUsuario,@telefonoUsuario,
						@celularUsuario,@idRol)

END


GO
/****** Object:  StoredProcedure [dbo].[registrarVenta]    Script Date: 9/12/2020 9:17:26 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[registrarVenta](
@idUsuario INT,
@estadoVenta BIT
)
AS
BEGIN
INSERT INTO tb_venta(idUsuario,fechaVenta,estadoVenta)
	VALUES(@idUsuario,GETDATE(),1)
END

GO
