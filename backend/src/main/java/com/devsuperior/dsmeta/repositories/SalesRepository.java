package com.devsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sale;

public interface SalesRepository extends JpaRepository<Sale, Long>{
/**
 reponsável por acessar o banco de dados
  **/
}
