<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Preinscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'phone', 'email', 'password', 'position', 'company_name', 
        'legal_form', 'core_business', 'parent_company', 'country', 
        'registration_number', 'rc_file', 'tax_id', 'tax_id_file', 
        'website', 'address', 'activity_code', 'company_logo', 'accept_terms'
    ];

    protected $hidden = [
        'password',
    ];
}
