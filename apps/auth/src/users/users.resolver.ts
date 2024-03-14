import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDocument } from './models/user.schema';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver(() => UserDocument)
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => UserDocument)
  createUser(
    @Args('createUserInput')
    createUserInput: CreateUserDto,
  ) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [UserDocument], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }
}
