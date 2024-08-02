body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url('C:\Users\preks\OneDrive\Pictures\193-1936590_best-laptop-wallpapers-4k-ultra-hd-desktop-wallpaper.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff; /* Adjust text color for better readability */
}

header {
    background-color: rgba(51, 51, 51, 0.8); /* Semi-transparent background */
    color: #fff;
    padding: 1em;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

main {
    margin-top: 80px; /* Add margin to avoid content behind the fixed header */
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background for better text visibility */
    border-radius: 10px;
}

h1, h2, p, form {
    margin: 20px 0;
}

input[type="text"], input[type="email"], input[type="password"], select, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

input[type="submit"], button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    border-radius: 5px;
    cursor: pointer;
}

input[type="submit"]:hover, button:hover {
    background-color: #0056b3;
}
