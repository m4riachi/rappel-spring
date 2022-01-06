package com.ben.spring.rappel.java.ws;

import com.ben.spring.rappel.java.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ben.spring.rappel.java.bean.Category;

@RestController
@RequestMapping("stock/categories")
public class CategoryProvided {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/ref/{ref}")
    public ResponseEntity<?> findByRef(@PathVariable String ref) {
        return categoryService.findByRef(ref);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        return categoryService.findById(id);
    }

    @GetMapping("/")
    public ResponseEntity<?> findAll() {
        return categoryService.findAll();
    }

    @PostMapping("/")
    public ResponseEntity<?> save(@RequestBody Category category) {
        return categoryService.save(category);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Category category) {
        return categoryService.update(id, category);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        return categoryService.deleteById(id);
    }
}
