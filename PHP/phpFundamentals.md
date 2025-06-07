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
[Learn more](https://www.php.net/manual/en/introduction.php)

---

### Basic Syntax

PHP scripts start with `<?php` and end with `?>`. Each statement ends with a semicolon. PHP is case-sensitive for variables, but not for keywords.

**PHP Opening and Closing Tags:**
```php
<?php
echo "Standard PHP tag";
?>
```
**Short Open Tag (if enabled):**
```php
<?
echo "Short open tag";
?>
```
*Note: Short open tags (`<?`) are discouraged and may not be enabled by default. Use `<?php` for portability.*

**Echo Shorthand:**
```php
<?= "This is PHP syntax!" ?>
```

**Comments:**
- Single-line: `// comment` or `# comment`
- Multi-line:
```php
/*
  This is a multi-line comment
*/
```
- PHPDoc (for documentation):
```php
/**
 * This is a PHPDoc comment
 * @param string $name
 * @return string
 */
function greet($name) {
    return "Hello, $name!";
}
```

**Whitespace:**
Whitespace (spaces, tabs, newlines) is ignored in PHP except within strings. Use whitespace to improve code readability.

**Escaping from HTML:**
PHP can be embedded in HTML. You can switch between PHP and HTML freely:
```php
<html>
<body>
<?php echo "Hello from PHP!"; ?>
<p>This is HTML.</p>
<?php echo "Back to PHP!"; ?>
</body>
</html>
```

**Heredoc and Nowdoc Syntax:**
- Heredoc (for multi-line strings with variable parsing):
```php
<?php
$name = "Alice";
echo <<<EOT
Hello, $name!
This is a heredoc example.
EOT;
?>
```
- Nowdoc (for multi-line strings without variable parsing):
```php
<?php
echo <<<'EOT'
Hello, $name!
This is a nowdoc example.
EOT;
?>
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
[Learn more](https://www.php.net/manual/en/language.control-structures.php)

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
[Learn more](https://www.php.net/manual/en/language.exceptions.php)

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
[General Security](https://www.php.net/manual/en/security.general.php)

---

**References:**  
- [PHP Manual](https://www.php.net/manual/en/index.php)

---

# Laravel 12.x Documentation – Table of Contents

- [Prologue](#prologue)
  - [Release Notes](#release-notes)
  - [Upgrade Guide](#upgrade-guide)
  - [Contribution Guide](#contribution-guide)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Directory Structure](#directory-structure)
  - [Frontend](#frontend)
  - [Starter Kits](#starter-kits)
  - [Deployment](#deployment)
- [Architecture Concepts](#architecture-concepts)
  - [Request Lifecycle](#request-lifecycle)
  - [Service Container](#service-container)
  - [Service Providers](#service-providers)
  - [Facades](#facades)
- [The Basics](#the-basics)
  - [Routing](#routing)
  - [Middleware](#middleware)
  - [CSRF Protection](#csrf-protection)
  - [Controllers](#controllers)
  - [Requests](#requests)
  - [Responses](#responses)
  - [Views](#views)
  - [Blade Templates](#blade-templates)
  - [Asset Bundling](#asset-bundling)
  - [URL Generation](#url-generation)
  - [Session](#session)
  - [Validation](#validation)
  - [Error Handling](#error-handling)
  - [Logging](#logging)
- [Digging Deeper](#digging-deeper)
  - [Artisan Console](#artisan-console)
  - [Broadcasting](#broadcasting)
  - [Cache](#cache)
  - [Collections](#collections)
  - [Concurrency](#concurrency)
  - [Context](#context)
  - [Contracts](#contracts)
  - [Events](#events)
  - [File Storage](#file-storage)
  - [Helpers](#helpers)
  - [HTTP Client](#http-client)
  - [Localization](#localization)
  - [Mail](#mail)
  - [Notifications](#notifications)
  - [Package Development](#package-development)
  - [Processes](#processes)
  - [Queues](#queues)
  - [Rate Limiting](#rate-limiting)
  - [Strings](#strings)
  - [Task Scheduling](#task-scheduling)
- [Security](#security)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Email Verification](#email-verification)
  - [Encryption](#encryption)
  - [Hashing](#hashing)
  - [Password Reset](#password-reset)
- [Database](#database)
  - [Getting Started](#getting-started-1)
  - [Query Builder](#query-builder)
  - [Pagination](#pagination)
  - [Migrations](#migrations)
  - [Seeding](#seeding)
  - [Redis](#redis)
  - [MongoDB](#mongodb)
- [Eloquent ORM](#eloquent-orm)
  - [Getting Started](#getting-started-2)
  - [Relationships](#relationships)
  - [Collections](#collections-1)
  - [Mutators / Casts](#mutators--casts)
  - [API Resources](#api-resources)
  - [Serialization](#serialization)
  - [Factories](#factories)
- [Testing](#testing)
  - [Getting Started](#getting-started-3)
  - [HTTP Tests](#http-tests)
  - [Console Tests](#console-tests)
  - [Browser Tests](#browser-tests)
  - [Database](#database-1)
  - [Mocking](#mocking)
- [Packages](#packages)
- [API Documentation](#api-documentation)

---

## Prologue

### Release Notes
Details about new features, improvements, and bug fixes in each Laravel release.

**Example:**
- "Laravel 12 introduces improved job batching and new Blade directives."

[Learn more](https://laravel.com/docs/12.x/releases)

### Upgrade Guide
Step-by-step instructions for upgrading your Laravel application to the latest version.

**Example:**
- "Update your composer.json to require laravel/framework: ^12.0."

[Learn more](https://laravel.com/docs/12.x/upgrade)

### Contribution Guide
Guidelines for contributing to the Laravel framework, including coding standards and submitting pull requests.

**Example:**
- "Fork the repository, create a feature branch, and submit a pull request."

[Learn more](https://laravel.com/docs/12.x/contributions)

---

## Getting Started

### Installation
How to install Laravel using Composer or Laravel Installer.

**Example:**
```bash
composer create-project laravel/laravel example-app
```
[Learn more](https://laravel.com/docs/12.x/installation)

### Configuration
Setting up environment variables and configuration files.

**Example:**
- Edit `.env` to set `APP_NAME`, `APP_ENV`, etc.

[Learn more](https://laravel.com/docs/12.x/configuration)

### Directory Structure
Overview of Laravel's default folders and their purposes.

**Example:**
- `app/` for application code, `routes/` for route definitions.

[Learn more](https://laravel.com/docs/12.x/structure)

### Frontend
Integrating frontend tools like Vite, and compiling assets.

**Example:**
```bash
npm run dev
```
[Learn more](https://laravel.com/docs/12.x/vite)

### Starter Kits
Pre-built authentication and frontend scaffolding (e.g., Breeze, Jetstream).

**Example:**
```bash
composer require laravel/breeze --dev
php artisan breeze:install
```
[Learn more](https://laravel.com/docs/12.x/starter-kits)

### Deployment
Best practices for deploying Laravel applications.

**Example:**
- Use `php artisan config:cache` before deploying.

[Learn more](https://laravel.com/docs/12.x/deployment)

---

## Architecture Concepts

### Request Lifecycle
How a request is handled from entry to response.

**Example:**
- Request → Middleware → Controller → Response

[Learn more](https://laravel.com/docs/12.x/lifecycle)

### Service Container
Dependency injection and service resolution in Laravel.

**Example:**
```php
app()->bind('HelpService', function () {
    return new HelpService();
});
```
[Learn more](https://laravel.com/docs/12.x/container)

### Service Providers
Central place to configure and bootstrap application services.

**Example:**
- Register services in `app/Providers/AppServiceProvider.php`

[Learn more](https://laravel.com/docs/12.x/providers)

### Facades
Static-like interface to classes in the service container.

**Example:**
```php
use Illuminate\Support\Facades\Cache;
Cache::put('key', 'value', 600);
```
[Learn more](https://laravel.com/docs/12.x/facades)

---

## The Basics

### Routing
Define application routes and handle HTTP requests.

**Example:**
```php
Route::get('/welcome', function () {
    return 'Welcome!';
});
```
[Learn more](https://laravel.com/docs/12.x/routing)

### Middleware
Filter HTTP requests entering your application.

**Example:**
```php
Route::middleware(['auth'])->group(function () {
    // Protected routes
});
```
[Learn more](https://laravel.com/docs/12.x/middleware)

### CSRF Protection
Protect your application from cross-site request forgery attacks.

**Example:**
```blade
<form method="POST">@csrf</form>
```
[Learn more](https://laravel.com/docs/12.x/csrf)

### Controllers
Organize request handling logic into controller classes.

**Example:**
```bash
php artisan make:controller UserController
```
[Learn more](https://laravel.com/docs/12.x/controllers)

### Requests
Handle and validate incoming HTTP requests.

**Example:**
```php
$request->input('name');
```
[Learn more](https://laravel.com/docs/12.x/requests)

### Responses
Return responses from routes or controllers.

**Example:**
```php
return response()->json(['message' => 'Success']);
```
[Learn more](https://laravel.com/docs/12.x/responses)

### Views
Render HTML using Blade templates.

**Example:**
```php
return view('welcome');
```
[Learn more](https://laravel.com/docs/12.x/views)

### Blade Templates
Laravel's powerful templating engine.

**Example:**
```blade
<h1>Hello, {{ $name }}</h1>
```
[Learn more](https://laravel.com/docs/12.x/blade)

### Asset Bundling
Manage and bundle CSS/JS assets with Vite.

**Example:**
```blade
@vite('resources/css/app.css')
```
[Learn more](https://laravel.com/docs/12.x/vite)

### URL Generation
Generate URLs for routes, assets, and more.

**Example:**
```php
url('/profile');
route('user.profile', ['id' => 1]);
```
[Learn more](https://laravel.com/docs/12.x/urls)

### Session
Store user data across requests.

**Example:**
```php
session(['user_id' => 1]);
```
[Learn more](https://laravel.com/docs/12.x/session)

### Validation
Validate incoming request data.

**Example:**
```php
$request->validate(['email' => 'required|email']);
```
[Learn more](https://laravel.com/docs/12.x/validation)

### Error Handling
Handle and display errors gracefully.

**Example:**
- Customize error pages in `resources/views/errors/`

[Learn more](https://laravel.com/docs/12.x/errors)

### Logging
Log messages and errors.

**Example:**
```php
Log::info('User logged in.');
```
[Learn more](https://laravel.com/docs/12.x/logging)

---

## Digging Deeper

### Artisan Console
Command-line interface for Laravel.

**Example:**
```bash
php artisan make:model Post
```
[Learn more](https://laravel.com/docs/12.x/artisan)

### Broadcasting
Real-time event broadcasting.

**Example:**
- Broadcast events with `broadcast(new EventName)`

[Learn more](https://laravel.com/docs/12.x/broadcasting)

### Cache
Store and retrieve cached data.

**Example:**
```php
Cache::put('key', 'value', 600);
```
[Learn more](https://laravel.com/docs/12.x/cache)

### Collections
Fluent, convenient wrapper for working with arrays of data.

**Example:**
```php
collect([1, 2, 3])->map(fn($n) => $n * 2);
```
[Learn more](https://laravel.com/docs/12.x/collections)

### Concurrency
Manage concurrent tasks and processes.

**Example:**
- Use queues and jobs for background processing.

[Learn more](https://laravel.com/docs/12.x/concurrency)

### Context
Share data across the request lifecycle.

**Example:**
- Use context to pass data between middleware and controllers.

[Learn more](https://laravel.com/docs/12.x/context)

### Contracts
Set of interfaces for Laravel core services.

**Example:**
- Implement `Illuminate\Contracts\Queue\ShouldQueue` for queued jobs.

[Learn more](https://laravel.com/docs/12.x/contracts)

### Events
Subscribe and listen to application events.

**Example:**
```php
event(new UserRegistered($user));
```
[Learn more](https://laravel.com/docs/12.x/events)

### File Storage
Store files locally or in the cloud.

**Example:**
```php
Storage::put('file.txt', 'Contents');
```
[Learn more](https://laravel.com/docs/12.x/filesystem)

### Helpers
Useful global helper functions.

**Example:**
```php
array_get($array, 'key');
```
[Learn more](https://laravel.com/docs/12.x/helpers)

### HTTP Client
Make HTTP requests to external services.

**Example:**
```php
Http::get('https://api.example.com');
```
[Learn more](https://laravel.com/docs/12.x/http-client)

### Localization
Support multiple languages.

**Example:**
```php
__('Welcome');
```
[Learn more](https://laravel.com/docs/12.x/localization)

### Mail
Send emails from your application.

**Example:**
```php
Mail::to($user)->send(new WelcomeMail());
```
[Learn more](https://laravel.com/docs/12.x/mail)

### Notifications
Send notifications via email, SMS, Slack, etc.

**Example:**
```php
$user->notify(new InvoicePaid($invoice));
```
[Learn more](https://laravel.com/docs/12.x/notifications)

### Package Development
Create reusable Laravel packages.

**Example:**
- Structure your package in `packages/` directory.

[Learn more](https://laravel.com/docs/12.x/packages)

### Processes
Run and manage system processes.

**Example:**
```php
Process::run('ls -la');
```
[Learn more](https://laravel.com/docs/12.x/processes)

### Queues
Defer processing of time-consuming tasks.

**Example:**
```php
dispatch(new SendEmailJob($user));
```
[Learn more](https://laravel.com/docs/12.x/queues)

### Rate Limiting
Limit the number of requests to routes.

**Example:**
```php
Route::middleware('throttle:60,1')->group(function () {
    // Routes
});
```
[Learn more](https://laravel.com/docs/12.x/rate-limiting)

### Strings
String manipulation helpers.

**Example:**
```php
Str::slug('Laravel 12.x Documentation');
```
[Learn more](https://laravel.com/docs/12.x/strings)

### Task Scheduling
Schedule recurring tasks with cron.

**Example:**
```php
$schedule->command('emails:send')->daily();
```
[Learn more](https://laravel.com/docs/12.x/scheduling)

---

## Security

### Authentication
User login, registration, and authentication.

**Example:**
- Use Laravel Breeze for simple authentication scaffolding.

[Learn more](https://laravel.com/docs/12.x/authentication)

### Authorization
Control user access to resources.

**Example:**
```php
$this->authorize('update', $post);
```
[Learn more](https://laravel.com/docs/12.x/authorization)

### Email Verification
Require users to verify their email addresses.

**Example:**
- Use `MustVerifyEmail` interface on User model.

[Learn more](https://laravel.com/docs/12.x/verification)

### Encryption
Encrypt and decrypt data securely.

**Example:**
```php
$encrypted = encrypt('secret');
$decrypted = decrypt($encrypted);
```
[Learn more](https://laravel.com/docs/12.x/encryption)

### Hashing
Securely hash passwords and other data.

**Example:**
```php
Hash::make('password');
```
[Learn more](https://laravel.com/docs/12.x/hashing)

### Password Reset
Allow users to reset their passwords.

**Example:**
- Use built-in password reset routes and notifications.

[Learn more](https://laravel.com/docs/12.x/passwords)

---

## Database

### Getting Started
Configure and connect to databases.

**Example:**
- Set `DB_CONNECTION`, `DB_DATABASE` in `.env`.

[Learn more](https://laravel.com/docs/12.x/database)

### Query Builder
Fluent interface for building SQL queries.

**Example:**
```php
DB::table('users')->where('active', 1)->get();
```
[Learn more](https://laravel.com/docs/12.x/queries)

### Pagination
Paginate database results.

**Example:**
```php
User::paginate(15);
```
[Learn more](https://laravel.com/docs/12.x/pagination)

### Migrations
Version control for your database schema.

**Example:**
```bash
php artisan make:migration create_posts_table
```
[Learn more](https://laravel.com/docs/12.x/migrations)

### Seeding
Populate your database with sample data.

**Example:**
```bash
php artisan db:seed
```
[Learn more](https://laravel.com/docs/12.x/seeding)

### Redis
Use Redis for caching and queues.

**Example:**
```php
Redis::set('name', 'Taylor');
```
[Learn more](https://laravel.com/docs/12.x/redis)

### MongoDB
Use MongoDB as a database (via community packages).

**Example:**
- Configure MongoDB connection in `config/database.php`.

[Learn more](https://laravel.com/docs/12.x/mongodb)

---

## Eloquent ORM

### Getting Started
Introduction to Laravel's ActiveRecord ORM.

**Example:**
```php
$user = User::find(1);
```
[Learn more](https://laravel.com/docs/12.x/eloquent)

### Relationships
Define relationships between models.

**Example:**
```php
public function posts() {
    return $this->hasMany(Post::class);
}
```
[Learn more](https://laravel.com/docs/12.x/eloquent-relationships)

### Collections
Work with Eloquent result sets.

**Example:**
```php
$users = User::all();
$active = $users->where('active', 1);
```
[Learn more](https://laravel.com/docs/12.x/eloquent-collections)

### Mutators / Casts
Modify attribute values when getting/setting.

**Example:**
```php
protected $casts = ['is_admin' => 'boolean'];
```
[Learn more](https://laravel.com/docs/12.x/eloquent-mutators)

### API Resources
Transform models for API responses.

**Example:**
```php
return new UserResource($user);
```
[Learn more](https://laravel.com/docs/12.x/eloquent-resources)

### Serialization
Convert models to arrays or JSON.

**Example:**
```php
$user->toArray();
```
[Learn more](https://laravel.com/docs/12.x/eloquent-serialization)

### Factories
Generate fake data for testing.

**Example:**
```php
User::factory()->count(10)->create();
```
[Learn more](https://laravel.com/docs/12.x/database-testing#factories)

---

## Testing

### Getting Started
Introduction to testing in Laravel.

**Example:**
```bash
php artisan test
```
[Learn more](https://laravel.com/docs/12.x/testing)

### HTTP Tests
Test your application's HTTP endpoints.

**Example:**
```php
$response = $this->get('/users');
$response->assertStatus(200);
```
[Learn more](https://laravel.com/docs/12.x/http-tests)

### Console Tests
Test Artisan commands.

**Example:**
```php
$this->artisan('inspire')->expectsOutput('Simplicity is the ultimate sophistication.');
```
[Learn more](https://laravel.com/docs/12.x/console-tests)

### Browser Tests
End-to-end browser testing with Laravel Dusk.

**Example:**
```php
$browser->visit('/login')->type('email', 'user@example.com');
```
[Learn more](https://laravel.com/docs/12.x/dusk)

### Database
Test database interactions.

**Example:**
```php
$this->assertDatabaseHas('users', ['email' => 'user@example.com']);
```
[Learn more](https://laravel.com/docs/12.x/database-testing)

### Mocking
Mock objects and services in tests.

**Example:**
```php
Mail::fake();
```
[Learn more](https://laravel.com/docs/12.x/mocking)

---

## Packages

Laravel offers official packages for common tasks.

**Example:**
- Install Laravel Cashier for subscription billing:
```bash
composer require laravel/cashier
```
[Learn more](https://laravel.com/docs/12.x/packages)

- Cashier (Stripe): [Cashier Stripe](https://laravel.com/docs/12.x/billing)
- Cashier (Paddle): [Cashier Paddle](https://laravel.com/docs/12.x/cashier-paddle)
- Dusk: [Dusk](https://laravel.com/docs/12.x/dusk)
- Envoy: [Envoy](https://laravel.com/docs/12.x/envoy)
- Fortify: [Fortify](https://laravel.com/docs/12.x/fortify)
- Folio: [Folio](https://laravel.com/docs/12.x/folio)
- Homestead: [Homestead](https://laravel.com/docs/12.x/homestead)
- Horizon: [Horizon](https://laravel.com/docs/12.x/horizon)
- Mix: [Mix](https://laravel.com/docs/12.x/mix)
- Octane: [Octane](https://laravel.com/docs/12.x/octane)
- Passport: [Passport](https://laravel.com/docs/12.x/passport)
- Pennant: [Pennant](https://laravel.com/docs/12.x/pennant)
- Pint: [Pint](https://laravel.com/docs/12.x/pint)
- Precognition: [Precognition](https://laravel.com/docs/12.x/precognition)
- Prompts: [Prompts](https://laravel.com/docs/12.x/prompts)
- Pulse: [Pulse](https://laravel.com/docs/12.x/pulse)
- Reverb: [Reverb](https://laravel.com/docs/12.x/reverb)
- Sail: [Sail](https://laravel.com/docs/12.x/sail)
- Sanctum: [Sanctum](https://laravel.com/docs/12.x/sanctum)
- Scout: [Scout](https://laravel.com/docs/12.x/scout)
- Socialite: [Socialite](https://laravel.com/docs/12.x/socialite)
- Telescope: [Telescope](https://laravel.com/docs/12.x/telescope)
- Valet: [Valet](https://laravel.com/docs/12.x/valet)

---

## API Documentation

Reference for Laravel's PHP API.

[Learn more](https://laravel.com/api/12.x/)

---

For the most up-to-date and detailed information, always refer to the official documentation: [Laravel 12.x Documentation](https://laravel.com/docs/12.x)






