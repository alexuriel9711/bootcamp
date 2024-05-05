/**
 *     @author Harry Alexander Gómez <Alexander9710@hotmail.com>
 *     @fileOverview Ejercicio 2 Modulo 3
 *     @licence BSD 3-Clause License
 */

const url = 'https://api.github.com/users/mojombo/followers';

fetch(url)
.then(getAvatarUrl =>{
    if (getAvatarUrl.ok){
        return getAvatarUrl.json();
    }else{
        throw new console.error('Network was not ok');
    }
})
.then (avatar_url => {
    console.log(avatar_url);
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});