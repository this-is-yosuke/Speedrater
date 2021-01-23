import User from '../models/user'

export function convertSqlUser(row: any) {
    return new User(row.userid, row.firstname, row.lastname, row.email, row.pass, row.roles);
}