import { IRatingDisplayProps } from "../RatingDisplay";

export interface IUserInfoProps {
  image: string;
  userType: string;
  userName: string;
  chatUrl: string;
  ratingDisplayProps?: IRatingDisplayProps;
  className?: string;
}
