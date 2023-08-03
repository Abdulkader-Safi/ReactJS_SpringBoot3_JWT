package com.reactjs_springboot3.mappers;

import com.reactjs_springboot3.dtos.SignUpDto;
import com.reactjs_springboot3.dtos.UserDto;
import com.reactjs_springboot3.entites.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}