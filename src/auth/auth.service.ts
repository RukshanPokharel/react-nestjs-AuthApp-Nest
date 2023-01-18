/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from 'src/typeorm';
import { LoginDto } from 'src/typeorm/loginDto';
import { Repository } from 'typeorm';

@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>, // type ORM Repository which contains CRUD methods for database interaction
  ) {}

  async login(loginDto: LoginDto): Promise<Register> {
    // login api response if authentication fails
    const loginResponse = {
      id: 0,
      username: '',
      password: '',
      address: '',
      phone_no: 0,
    };

    // repository method for finding a user by username. queries the database by username.
    const isUserLoginCorrect = await this.registerRepository.findOne({
      where: {
        username: loginDto.username,
      },
    });
    // authentication logic for comparing user and password
    if (
      isUserLoginCorrect !== null &&
      isUserLoginCorrect.password == loginDto.password
    ) {
      return isUserLoginCorrect;
    } else {
      return loginResponse;
    }

    // isUserLoginCorrect
    //   .then((data) => {
    //     if (data !== null && data.password == loginDto.password) {
    //       console.log(data);
    //       result = 'login success';
    //     } else {
    //       console.log('invalid credentials');
    //       result = 'invalid password';
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     result = err;
    //   });
  }

  signup(register: Register) {
    const newUser = this.registerRepository.create(register);
    return this.registerRepository.save(newUser); // saves or updates a new user in database when register
  }
}
