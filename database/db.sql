DROP DATABASE  if EXISTS database_links;
CREATE DATABASE database_links;
USE database_links;
CREATE TABLE usuarios(
    id int(11) not null,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(60) NOT NULL
);
ALTER TABLE usuarios ADD PRIMARY KEY (id);
ALTER TABLE usuarios MODIFY id INT(11) NOT NULL AUTO_INCREMENT;
DESCRIBE usuarios;

create table links(
	id INT(11) NOT NULL,
    titulo varchar(255) not null,
    url varchar(150) not null,
    descripcion text,
    user_id INT(11),
    created_at timestamp NOT NULL default current_timestamp,
    foreign key (user_id) references usuarios(id)
);
alter table links add primary key (id);
alter table links modify id int(11) not null auto_increment;

describe links;