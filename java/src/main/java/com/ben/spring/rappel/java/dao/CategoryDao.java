package com.ben.spring.rappel.java.dao;

import com.ben.spring.rappel.java.bean.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryDao extends JpaRepository<Category,Long> {
    Optional<Category> findByRef(String ref);
    Category findByName(String name);
}
