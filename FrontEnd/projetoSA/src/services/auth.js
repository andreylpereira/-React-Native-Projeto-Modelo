export function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlRoaWFnbyIsInN1YiI6IjEzIiwianRpIjoiZDBlMGFkZDItOTlkMC00NWY1LThlYzEtY2FiYzIwZjkxMGYyIiwiaWF0IjoxNTAwMDMzMjE0LCJKd3RWYWxpZGF0aW9uIjoiVXN1YXJpbyIsIm5iZiI6MTUwMDAzMzIxMywiZXhwIjoxNTAwMDMzMjczLCJpc3MiOiJJc3N1ZXIiLCJhdWQiOiJBdWRpZW5jZSJ9.SmjuyXgloA2RUhIlAEetrQwfC0EhBmhu-xOMzyY3Y_Q',
                usuario: {
                    name: 'José',
                    perfil: 'banda',
                    email: 'gigapp@gmail.com',
                    password: 'teste'
                },
            })
        }, 2000);
    });
}