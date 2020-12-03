-- MariaDB dump 10.17  Distrib 10.4.13-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: belajar
-- ------------------------------------------------------
-- Server version	10.4.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `provinsi`
--

DROP TABLE IF EXISTS `provinsi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provinsi` (
  `nama_prov` varchar(100) DEFAULT NULL,
  `kode_iso` char(2) DEFAULT NULL,
  `ibukota` varchar(50) DEFAULT NULL,
  `populasi` varchar(50) DEFAULT NULL,
  `luas` varchar(5) DEFAULT NULL,
  `apbd` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinsi`
--

LOCK TABLES `provinsi` WRITE;
/*!40000 ALTER TABLE `provinsi` DISABLE KEYS */;
INSERT INTO `provinsi` VALUES (' Aceh','AC','Banda Aceh','4.906.835','86','130.45\r'),(' Bali','BA','Denpasar','4.104.900','738','156.45\r'),(' Banten','BT','Serang','11.704.877','1.298','432.76\r'),(' Bengkulu','BE','Bengkulu','1.844.800','93','45.24\r'),(' Gorontalo','GO','Gorontalo','1.115.633','93','25.2\r'),(' Jakarta','JK','Jakarta','10.012.271','13.53','1.761.41\r'),(' Jambi','JA','Jambi','3.344.400','63','153.86\r'),(' Jawa Barat','JB','Bandung','46.029.668','1.306','1.385.96\r'),(' Jawa Tengah','JT','Semarang','33.522.663','986','925.66\r'),(' Jawa Timur','JI','Surabaya','38.610.202','806','1.540.70\r'),(' Kalimantan Barat','KB','Pontianak','4.716.093','41','131.93\r'),(' Kalimantan Selatan','KS','Banjarmasin','3.922.790','107','131.59\r'),(' Kalimantan Tengah','KT','Palangkaraya','2.439.858','16','89.87\r'),(' Kalimantan Timur','KI','Samarinda','3.351.432','17','519.93\r'),(' Kalimantan Utara','KU','Tanjungselor','618.384','9','59.08\r'),(' Kepulauan Bangka Belitung','BB','Pangkalpinang','1.343.900','82','56.39\r'),(' Kepulauan Riau','KR','Tanjung Pinang','1.917.415','237','182.92\r'),(' Lampung','LA','Bandar Lampung','8.026.191','227','231.01\r'),(' Maluku','MA','Ambon','1.657.409','34','31.73\r'),(' Maluku Utara','MU','Sofifi','1.138.667','27','24.05\r'),(' Nusa Tenggara Barat','NB','Mataram','4.773.795','239','82.25\r'),(' Nusa Tenggara Timur','NT','Kupang','5.036.897','106','68.6\r'),(' Papua','PA','Jayapura','3.091.047','10','123.18\r'),(' Papua Barat','PB','Manokwari','849.809','7','58.29\r'),(' Riau','RI','Pekanbaru','6.188.442','66','679.69\r'),(' Sulawesi Barat','SR','Mamuju','1.258.090','75','29.39\r'),(' Sulawesi Selatan','SN','Makassar','8.432.163','183','300.12\r'),(' Sulawesi Tengah','ST','Palu','2.831.283','42','90.26\r'),(' Sulawesi Tenggara','SG','Kendari','2.448.081','67','78.62\r'),(' Sulawesi Utara','SA','Manado','2.386.604','171','80.62\r'),(' Sumatra Barat','SB','Padang','5.131.900','121','167.04\r'),(' Sumatra Selatan','SS','Palembang','7.941.500','93','308.41\r'),(' Sumatra Utara','SU','Medan','13.766.851','189','523.77\r'),(' Yogyakarta','YO','Yogyakarta','3.553.100','1.134','93.45\r');
/*!40000 ALTER TABLE `provinsi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-11 12:33:38
