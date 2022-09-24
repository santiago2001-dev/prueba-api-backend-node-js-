
--
-- Database: `backend-prueba`
--

-- --------------------------------------------------------


CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `codigo` varchar(10) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` text NOT NULL,
  `produtoParaLaVenta` varchar(10) NOT NULL,
  `porcentajeIva` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);


--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;


