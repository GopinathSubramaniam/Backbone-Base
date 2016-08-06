package com.book.trip.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.trip.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
