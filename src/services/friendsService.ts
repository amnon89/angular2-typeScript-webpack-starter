import {Friend} from "../models/friend";

/**
 * Created by amnon on 19/03/2016.
 */
export interface FriendsService {

    search(query: string): Friend[];
}