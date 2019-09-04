<?php
namespace App;

use App\Providers\CustomizerServiceProvider;
use App\Providers\MenuServiceProvider;

return [
	'providers'     => [
		MenuServiceProvider::class,
		CustomizerServiceProvider::class
	]
];
