import { Author } from "../models/author.interface";

export class NAuthorsService {
    private _list: Array<Author>;

    constructor() {
        var a1 = {
            name: "Author One",
            quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
        },
            a2 = {
                name: "Author Two",
                quote: "Why, I have known clergymen, good men, kind-hearted, liberal, sincere, and all that, who did not know the meaning of a 'flush.' It is enough to make one ashamed of one's species."
            },
            a3 = {
                name: "Author Three",
                quote: "Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before."
            },
            a4 = {
                name: "Author Four",
                quote: "All things will be produced in superior quantity and quality, and with greater ease, when each man works at a single occupation, in accordance with his natural gifts, and at the right moment, without meddling with anything else. "
            };

        this._list = [a1, a2, a3, a4];
    }

    get Authors() {
        return this._list;
    }
}