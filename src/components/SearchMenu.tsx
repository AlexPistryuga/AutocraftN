import React, { useEffect } from 'react';
import '../index.css'; // Путь к вашему CSS файлу

const SearchMenu: React.FC = () => {
    useEffect(() => {
        const search = document.querySelector('.search-box') as HTMLElement | null;
        const menu = document.querySelector('.navbar') as HTMLElement | null;
        const searchIcon = document.querySelector('#search-icon') as HTMLElement | null;
        const menuIcon = document.querySelector('#menu-icon') as HTMLElement | null;

        if (searchIcon && search && menu) {
            searchIcon.onclick = () => {
                search.classList.toggle('active');
                menu.classList.remove('active');
            };
        }

        if (menuIcon && menu && search) {
            menuIcon.onclick = () => {
                menu.classList.toggle('active');
                search.classList.remove('active');
            };
        }

        window.onscroll = () => {
            menu?.classList.remove('active');
            search?.classList.remove('active');
        };
    }, []);

    return null;
};

export default SearchMenu;
