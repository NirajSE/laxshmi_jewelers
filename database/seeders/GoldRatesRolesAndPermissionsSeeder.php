<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class GoldRatesRolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Creating permissions
        Permission::create(['name' => 'add gold rates']);
        Permission::create(['name' => 'view gold rates']);
        Permission::create(['name' => 'edit gold rates']);

        // Creating roles
        $superAdminRole = Role::create(['name' => 'Super Administrator']);
        $salespersonRole = Role::create(['name' => 'Salesperson']);

        // Assigning permissions to the Super Administrator role
        $superAdminRole->givePermissionTo([
            'add gold rates',
            'view gold rates',
            'edit gold rates'
        ]);

        // Assigning permissions to the Salesperson role
        $salespersonRole->givePermissionTo([
            'add gold rates',
            'view gold rates',
            'edit gold rates'
        ]);
    }
}
