package com.ben.spring.rappel.java.service;

import com.ben.spring.rappel.java.bean.Category;
import com.ben.spring.rappel.java.dao.CategoryDao;
import com.ben.spring.rappel.java.helper.ReturnWithData;
import com.ben.spring.rappel.java.helper.ReturnWithMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryDao categoryDao;

    public ResponseEntity<?> findByRef(String ref) {
        Optional<Category> category = categoryDao.findByRef(ref);

        if (!category.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ReturnWithData("error", "Catégorie n'existe pas"));
        }

        return ResponseEntity.ok(new ReturnWithData(categoryDao.findByRef(ref)));
    }

    public ResponseEntity<?> findById(Long id) {
        Optional<Category> category = categoryDao.findById(id);

        if (!category.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ReturnWithData("error", "Catégorie n'existe pas"));
        }

        return ResponseEntity.ok(new ReturnWithData(category));
    }

    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok(new ReturnWithData(categoryDao.findAll()));
        //return new ResponseEntity(new ReturnWithData(categoryDao.findAll()), HttpStatus.BAD_GATEWAY);
    }

    public ResponseEntity<?> save(Category category) {
        List<String> errors = new ArrayList<String>();

        if (categoryDao.findByRef(category.getRef()) != null) {
            errors.add("Référence existe déja");
        }

        if (categoryDao.findByName(category.getName()) != null) {
            errors.add("Nom existe déja");
        }

        if (errors.size() > 0) {
            System.out.println(errors);
            return new ResponseEntity(new ReturnWithMessage("error", errors), HttpStatus.BAD_GATEWAY);
        }

        Category inserted = categoryDao.save(category);
        return ResponseEntity.ok(new ReturnWithData(inserted));
    }

    public ResponseEntity<?> update(Long id,Category category) {
        List<String> errors = new ArrayList<String>();

        if (categoryDao.findById(id) == null) {
            errors.add("Catégorie n'exiiste pas");
        }

        if (errors.size() > 0) {
            return new ResponseEntity(new ReturnWithMessage("error", errors), HttpStatus.NOT_FOUND);
        }

        category.setId(id);
        Category updated = categoryDao.save(category);
        return ResponseEntity.ok(new ReturnWithData(updated));
    }

    @Transactional
    public ResponseEntity<?> deleteById(Long id) {
        Optional<Category> category = categoryDao.findById(id);

        if (!category.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ReturnWithData("error", "Catégorie n'existe pas"));
        }

        categoryDao.deleteById(id);

        return ResponseEntity.ok(new ReturnWithMessage("success", "Catégorie supprimer avec succès"));
    }
}
