/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Register } from 'src/typeorm';
import { loginDto } from 'src/typeorm/loginDto';
import { Repository } from 'typeorm';

@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>,
  ) {}

  async login(loginDto: loginDto): Promise<Register> {
    // let result = '';
    const loginResponse = {
      id: 0,
      username: '',
      password: '',
      address: '',
      phone_no: 0,
    };

    const isUserLoginCorrect = await this.registerRepository.findOne({
      where: {
        username: loginDto.username,
      },
    });
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
    // return result;
  }

  signup(register: Register) {
    const newUser = this.registerRepository.create(register);
    return this.registerRepository.save(newUser);
  }
}
