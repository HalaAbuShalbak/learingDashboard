## PHP Fundamentals
### Table of Contents
1. [Introduction to PHP](#introduction-to-php)
2. [Basic Syntax](#basic-syntax)
3. [Variables and Data Types](#variables-and-data-types)
4. [Operators](#operators)
5. [Control Structures](#control-structures)
6. [Functions](#functions)
7. [Arrays](#arrays)
8. [Object-Oriented Programming](#object-oriented-programming)
9. [File Handling](#file-handling)
10. [Database Connectivity](#database-connectivity)
11. [Error Handling](#error-handling)
12. [Security Best Practices](#security-best-practices)

---

### Introduction to PHP

PHP (Hypertext Preprocessor) is a popular open-source server-side scripting language designed for web development, but also used as a general-purpose language. PHP scripts are executed on the server, and the result is sent to the browser as plain HTML.

**Example:**
```php
<?php
echo "Hello, World!";
?>
```
**Shorthand:**
```php
<?= "Hello, World!" ?>
```
[Learn more](https://www.php.net/manual/en/intro-whatis.php)

---

### Basic Syntax

PHP scripts start with `<?php` and end with `?>`. Each statement ends with a semicolon. PHP is case-sensitive for variables, but not for keywords.

**Example:**
```php
<?php
// This is a single-line comment
echo "This is PHP syntax!"; // Output text
?>
```
**Shorthand for echo:**
```php
<?= "This is PHP syntax!" ?>
```
[Learn more](https://www.php.net/manual/en/language.basic-syntax.php)

---

### Variables and Data Types

Variables in PHP start with a `$` sign, followed by the variable name. PHP supports data types like strings, integers, floats, booleans, arrays, objects, and NULL.

**Example:**
```php
<?php
$name = "Alice";
$age = 30;
$isAdmin = true;
$price = 19.99;
?>
```
*No shorthand syntax for variable declarations.*
[Learn more](https://www.php.net/manual/en/language.types.php)

---

### Operators

PHP supports arithmetic, assignment, comparison, increment/decrement, logical, string, and array operators.

**Example:**
```php
<?php
$a = 5;
$b = 2;
echo $a + $b; // 7
echo $a == $b; // false
?>
```
**Shorthand for echo:**
```php
<?= $a + $b ?>
```
[Learn more](https://www.php.net/manual/en/language.operators.php)

---

### Control Structures

Control structures include `if`, `else`, `elseif`, `switch`, `while`, `do-while`, `for`, and `foreach`.

**Example:**
```php
<?php
$score = 85;
if ($score >= 60) {
    echo "Passed";
} else {
    echo "Failed";
}
?>
```
**Alternative syntax for control structures:**
```php
<?php if ($score >= 60): ?>
    Passed
<?php else: ?>
    Failed
<?php endif; ?>
```
[Learn more](https://www.php.net/manual/en/control-structures.alternative-syntax.php)

---

### Functions

Functions are blocks of code that can be reused. Define with `function` keyword.

**Example:**
```php
<?php
function greet($name) {
    return "Hello, $name!";
}
echo greet("Bob");
?>
```
**Shorthand for echoing function result:**
```php
<?= greet("Bob") ?>
```
[Learn more](https://www.php.net/manual/en/language.functions.php)

---

### Arrays

Arrays store multiple values in one variable. Types: indexed, associative, and multidimensional.

**Example:**
```php
<?php
$colors = array("red", "green", "blue");
echo $colors[0]; // red

$person = array("name" => "Alice", "age" => 25);
echo $person["name"]; // Alice
?>
```
**Shorthand for echoing array values:**
```php
<?= $colors[0] ?>
<?= $person["name"] ?>
```
[Learn more](https://www.php.net/manual/en/language.types.array.php)

---

### Object-Oriented Programming

PHP supports classes, objects, inheritance, and more.

**Example:**
```php
<?php
class Car {
    public $color;
    function __construct($color) {
        $this->color = $color;
    }
    function getColor() {
        return $this->color;
    }
}
$myCar = new Car("red");
echo $myCar->getColor(); // red
?>
```
**Shorthand for echoing method result:**
```php
<?= $myCar->getColor() ?>
```
[Learn more](https://www.php.net/manual/en/language.oop5.php)

---

### File Handling

PHP can read, write, and manipulate files using functions like `fopen()`, `fread()`, `fwrite()`, and `fclose()`.

**Example:**
```php
<?php
$file = fopen("test.txt", "w");
fwrite($file, "Hello, file!");
fclose($file);
?>
```
*No shorthand syntax for file handling functions.*
[Learn more](https://www.php.net/manual/en/book.filesystem.php)

---

### Database Connectivity

PHP can connect to databases like MySQL using extensions such as MySQLi or PDO.

**Example (MySQLi):**
```php
<?php
$conn = new mysqli("localhost", "username", "password", "database");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
$conn->close();
?>
```
**Shorthand for echoing connection status:**
```php
<?= "Connected successfully" ?>
```
[Learn more](https://www.php.net/manual/en/book.mysqli.php)

---

### Error Handling

PHP provides error handling using `try`, `catch`, and `finally` blocks, as well as error reporting functions.

**Example:**
```php
<?php
try {
    throw new Exception("An error occurred!");
} catch (Exception $e) {
    echo "Caught exception: " . $e->getMessage();
}
?>
```
**Shorthand for echoing exception message:**
```php
<?= $e->getMessage() ?>
```
[Learn more](https://www.php.net/manual/en/language.errors.php)

---

### Security Best Practices

- Validate and sanitize user input.
- Use prepared statements for database queries.
- Avoid displaying detailed error messages in production.
- Keep PHP and all dependencies updated.

**Example (Prepared Statement):**
```php
<?php
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
?>
```
*No shorthand syntax for prepared statements.*
[Learn more](https://www.php.net/manual/en/security.php)

---

**References:**  
- [PHP Manual](https://www.php.net/manual/en/index.php)

Let me know if you want to expand any section or add more advanced topics!


