package com.ems.service;

import com.ems.entity.Department;
import com.ems.exception.ResourceNotFoundException;
import com.ems.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    private final DepartmentRepository repository;

    public DepartmentService(DepartmentRepository repository) {
        this.repository = repository;
    }

    public List<Department> getAll() {
        return repository.findAll();
    }

    public Department getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));
    }

    public Department create(Department department) {
        department.setId(null);
        return repository.save(department);
    }

    public Department update(Long id, Department updated) {
        Department existing = getById(id);
        existing.setName(updated.getName());
        existing.setLocation(updated.getLocation());
        existing.setManagerName(updated.getManagerName());
        return repository.save(existing);
    }

    public void delete(Long id) {
        Department existing = getById(id);
        repository.delete(existing);
    }

    public List<Department> search(String keyword) {
        return repository.findByNameContainingIgnoreCase(keyword);
    }
}
