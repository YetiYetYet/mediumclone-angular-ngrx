import {CurrentUserInterface} from "../../shared/types/currentUser.interface";

export interface CurrentUserInputResponseInterface {
  user: CurrentUserInputInterface
}

export interface CurrentUserInputInterface extends CurrentUserInterface {
  password: string;

}
