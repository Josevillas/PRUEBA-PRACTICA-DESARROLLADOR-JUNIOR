CREATE TABLE Habitacion (
  Numero_de_habitacion INT,
  Tipo_de_habitacion varchar(255),
  Precio_de_la_habitacion INT,
  Disponibilidad varchar(255),
  PRIMARY KEY (Numero_de_habitacion)
);

CREATE TABLE Cliente (
  Nombre_del_cliente varchar(255),
  Direccion_del_cliente varchar(255),
  No_Telefono varchar(24),
  PRIMARY KEY (Nombre_del_cliente)
);

CREATE TABLE Reserva (
  Numero_de_reserva INT IDENTITY(1,1),
  R_Nombre_del_cliente varchar(255),
  R_Numero_de_habitacion INT,
  Fecha_de_entrada DATE,
  Fecha_de_salida DATE,
  CONSTRAINT FK_Numero_de_habitacion FOREIGN KEY(R_Numero_de_habitacion) REFERENCES Habitacion(Numero_de_habitacion),
  FOREIGN KEY (R_Nombre_del_cliente) REFERENCES Cliente(Nombre_del_cliente),
  PRIMARY KEY (Numero_de_reserva)
);
