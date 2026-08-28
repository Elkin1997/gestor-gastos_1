-- ============================================
-- Base de datos: Gestor de Gastos
-- ============================================

CREATE DATABASE IF NOT EXISTS gestor_gastos;
USE gestor_gastos;

CREATE TABLE IF NOT EXISTS usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS gasto (
    id_gasto INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_categoria INT NOT NULL,
    monto DECIMAL(10,2) NOT NULL,
    fecha DATE NOT NULL,
    descripcion VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

INSERT INTO usuario (nombre, email, contrasena) VALUES
('Mariana Torre', 'mariana.torres@correo.com', 'pass2024a'),
('Julián Herrera', 'julian.herrera@correo.com', 'pass2024b'),
('Daniela Rojas', 'daniela.rojas@correo.com', 'pass2024c');

INSERT INTO categoria (nombre_categoria) VALUES
('Alimentación'),
('Transporte'),
('Servicios públicos'),
('Entretenimiento'),
('Salud');

INSERT INTO gasto (id_usuario, id_categoria, monto, fecha, descripcion) VALUES
(1, 1, 45000.00, '2026-08-01', 'Mercado semanal'),
(1, 2, 12000.00, '2026-08-02', 'Pasajes de bus'),
(1, 3, 85000.00, '2026-08-03', 'Factura de energía'),
(2, 1, 30000.00, '2026-08-01', 'Almuerzo con amigos'),
(2, 4, 25000.00, '2026-08-04', 'Cine'),
(2, 5, 60000.00, '2026-08-05', 'Consulta médica'),
(3, 2, 15000.00, '2026-08-02', 'Gasolina'),
(3, 3, 40000.00, '2026-08-03', 'Factura de agua'),
(3, 1, 22000.00, '2026-08-06', 'Cena'),
(1, 4, 18000.00, '2026-08-07', 'Streaming mensual'),
(2, 2, 10000.00, '2026-08-08', 'Taxi'),
(3, 5, 35000.00, '2026-08-09', 'Medicamentos');
