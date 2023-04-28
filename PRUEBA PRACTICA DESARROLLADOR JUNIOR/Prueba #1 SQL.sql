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
  Numero_de_reserva IIDENTITY(1,1),
  R_Nombre_del_cliente varchar(255),
  R_Numero_de_habitacion INT,
  Fecha_de_entrada DATE,
  Fecha_de_salida DATE,
  FOREIGN KEY (R_Numero_de_habitacion) REFERENCES Habitacion(Numero_de_habitacion),
  FOREIGN KEY (R_Nombre_del_cliente) REFERENCES Cliente(Nombre_del_cliente),
  PRIMARY KEY (Numero_de_reserva)
);


INSERT INTO Habitacion VALUES (1,"individual",200,"disponible");
INSERT INTO Habitacion VALUES (2,"doble",200,"disponible");
INSERT INTO Habitacion VALUES (3,"triple",500,"disponible");
SELECT * from Habitacion

INSERT INTO Cliente VALUES ("Jose Manuel Villagran Marroquin","z12","1234-4321");
INSERT INTO Cliente VALUES ("Jose Manuel Villagran 1","z11","1234-1234");
INSERT INTO Cliente VALUES ("Jose Manuel Villagran 2","z12","1234-5678");
select * FROM Cliente

INSERT INTO Reserva VALUES (1,"Jose Manuel",1,TO_DATE('14-SEP-2024', 'DD-MON-YYYY'),TO_DATE('14-SEP-2025', 'DD-MON-YYYY') );

