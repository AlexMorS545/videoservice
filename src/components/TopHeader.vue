<template>
    <header class="header">
        <div class="header__wrp container">
            <router-link class="logo" to="/">
                <img class="logo__img" src="../assets/image/logo/sign.png" alt="logo company">
                <span class="logo__title">Видеосервис</span>
            </router-link>
            <div class="header__search">
                <form class="search">
                    <input type="text" class="search__input" placeholder="поиск...">
                    <button type="submit" class="search__btn">Найти</button>
                </form>
            </div>
            <div class="header__login">
                <button class="header__login-btn btn" @click="showForm=!showForm">Войти</button>
            </div>
        </div>
    </header>
    <div class="login-wrp" v-show="showForm">
        <form class="login-form">
            <span class="close" @click="showForm=!showForm">x</span>
            <span class="login-form__title">Вход</span>
            <input id="login" type="text" class="login-form__login" name="login" placeholder="Логин" required>
            <input id="pass" type="text" class="login-form__pass" name="pass" placeholder="Пароль" required>
            <label class="login-form__lable-check" for="check"><input id="check" type="checkbox" class="login-form__input-check">Запомнить</label>
            <button class="login-form__btn btn" type="submit">Войти</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'TopHeader',
    data() {
        return {
            showForm: false
        }
    }
}
</script>
<style lang="less" scoped>

.header{
    padding: 30px;
    &__wrp {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333333;
    &__img {
        margin-right: 10px;
    }
    &__title {
        font-family: RubikMedium;
        font-weight: 500;
        font-size: 20px;
    }
}
.search {
    &__input {
        width: 320px;
        outline: none;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid;
        font-family: RubikRegular;
        font-weight: 400;
        font-size: 16px;
    }
    &__input:focus {
        font-family: RubikMedium;
        font-weight: 500;
        font-size: 16px;
    }
    &__btn {
        color: #E5261E;
        padding: 5px 10px;
        cursor: pointer;
        margin-left: 20px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        &:hover {
            color: #CC221B;
        }
    }

}
.login-wrp {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(51, 51, 51, .6);
    display: flex;
    align-items: center;
    justify-content: center;
}
.close {
    position: absolute;
    top: 3px;
    right: 8px;
    cursor: pointer;
    font-size: 22px;
    padding: 6px;
    line-height: 12px;
    color: #E5261E;
    border: 1px solid #E5261E;
    border-radius: 3px;
    transition: all .2s ease-in-out;
    &:hover {
        border: 1px solid transparent;
        color: #fff;
        background-color: #E5261E;
    }
}
.login-form {
    display: flex;
    flex-direction: column;
    width: 310px;
    padding: 35px;
    background: #ffffff;
    border-radius: 8px;
    position: relative;
    &__title {
        font-family: RubikMedium;
        font-weight: 500;
        font-size: 28px;
    }
    &__login {
        margin-top: 25px;
        width: 320px;
        outline: none;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid;
        font-family: RubikRegular;
        font-weight: 400;
        font-size: 16px;
    }
    &__pass {
        margin-top: 25px;
        width: 320px;
        outline: none;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid;
        font-family: RubikRegular;
        font-weight: 400;
        font-size: 16px;  
    }
    &__input-check {
        margin-right: 10px;
    }
    &__lable-check {
        display: flex;
        margin-top: 20px;
    }
    &__btn {
        margin-top: 100px;
        width: 110px;
        align-self: center;
    }
}
</style>