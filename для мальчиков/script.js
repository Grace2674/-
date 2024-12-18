document.addEventListener('DOMContentLoaded', function() {
    const ageSelect = document.querySelector('.age-catalog');
    const priceSelect = document.querySelector('.price-catalog');
    const products = document.querySelectorAll('.product-card');

    function filterProducts() {
        const selectedAge = ageSelect.value;
        const selectedPrice = priceSelect.value;

        products.forEach(product => {
            const productAge = product.getAttribute('data-age');
            const productPrice = parseInt(product.getAttribute('data-price'));

            const ageMatch = selectedAge === '' || productAge === selectedAge;
            const priceMatch = selectedPrice === '' || (
                (selectedPrice === '0-500' && productPrice <= 500) || 
                (selectedPrice === '501-1000' && productPrice > 500 && productPrice <= 1000) ||
                (selectedPrice === '1001-2000' && productPrice > 1000 && productPrice <= 2000)
            );

            if (ageMatch && priceMatch) {
                product.style.display = 'block'; // Показываем продукт
            } else {
                product.style.display = 'none'; // Скрываем продукт
            }
        });
    }

    ageSelect.addEventListener('change', filterProducts);
    priceSelect.addEventListener('change', filterProducts);
});
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    if (!confirm(`Вы уверены, что хотите купить ${itemName} за ${itemPrice} KZT?`)) {
        return; // Если пользователь отменил, выходим из функции
    }

    const cartItems = document.getElementById('cartItems');
    const newItem = document.createElement('div');
    newItem.textContent = `${itemName} - ${itemPrice} KZT`;
    cartItems.appendChild(newItem);

    totalPrice += itemPrice;
    document.getElementById('totalPrice').textContent = totalPrice;
}

function clearCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Очищаем корзину
    totalPrice = 0; // Сбрасываем общую стоимость
    document.getElementById('totalPrice').textContent = totalPrice;
}

function checkout() {
    if (totalPrice > 0) {
        alert(`Спасибо за покупку на сумму ${totalPrice} KZT!`);
        clearCart(); // Очищаем корзину после оформления
    } else {
        alert('Корзина пуста. Добавьте товары для покупки.');
    }
}
function checkout() {
    if (totalPrice > 0) {
        openModal(); // Открываем модальное окно оформления заказа
    } else {
        alert('Корзина пуста. Добавьте товары для покупки.');
    }
}

// Открытие модального окна
function openModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

// Обработчик для отправки формы
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    alert(`Заказ подтвержден! Имя: ${name}, Адрес: ${address}, Телефон: ${phone}, Сумма: ${totalPrice} KZT`);

    clearCart(); // Очистить корзину после оформления заказа
    closeModal(); // Закрыть модальное окно
});
// Функция для открытия окна Личный кабинет
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'block';  // Показываем окно
}

// Функция для закрытия окна Личный кабинет
function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'none';  // Скрываем окно
}

// Обработчик отправки формы (например, можно сохранять данные)
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Отменяем стандартное действие формы

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Здесь можно обработать данные, например, отправить на сервер
    alert(`Ваши данные обновлены:\nИмя: ${username}\nEmail: ${email}\nТелефон: ${phone}`);
    
    closeProfileModal(); // Закрываем модальное окно после сохранения данных
});
