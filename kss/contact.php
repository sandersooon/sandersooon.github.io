<?php include 'includes/header.php'; ?>

<main>
    <section class="contact">
        <h2>Контакти</h2>
        <p>Зв'язатись з нами можна через електронну пошту або телефон.</p>

        <form action="contact.php" method="post">
            <label for="name">Ваше ім'я:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Ваш Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Повідомлення:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Відправити</button>
        </form>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
