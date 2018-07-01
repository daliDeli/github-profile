export default class User {
    constructor(data) {
        this.name = data.login;
        this.avatarUrl = data.avatar_url;
        this.company = data.company;
        this.location = data.location;
        this.bio = data.bio;
    }
}
