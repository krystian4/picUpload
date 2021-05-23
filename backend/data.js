import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            username: 'admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('admin', 8)
        },
        {
            username: 'user',
            email: 'user@example.com',
            password: bcrypt.hashSync('user', 8)
        },
    ]
}
export default data;