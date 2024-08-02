<?php

namespace App\Http\Controllers;

use App\Models\Preinscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class PreinscriptionController extends Controller
{
    public function store(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'position' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'legal_form' => 'required|string|max:255',
            'core_business' => 'required|string',
            'parent_company' => 'required|string|max:255',
            'country' => 'required|string',
            'registration_number' => 'required|string|max:255',
            'rc_file' => 'required|file',
            'tax_id' => 'required|string|max:255',
            'tax_id_file' => 'required|file',
            'address' => 'required|string|max:255',
            'accept_terms' => 'accepted',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Enregistrement des données
        $preinscription = new Preinscription();
        $preinscription->name = $request->name;
        $preinscription->phone = $request->phone;
        $preinscription->email = $request->email;
        $preinscription->password = Hash::make($request->password);
        $preinscription->position = $request->position;
        $preinscription->company_name = $request->company_name;
        $preinscription->legal_form = $request->legal_form;
        $preinscription->core_business = $request->core_business;
        $preinscription->parent_company = $request->parent_company;
        $preinscription->country = $request->country;
        $preinscription->registration_number = $request->registration_number;
        $preinscription->rc_file = $request->file('rc_file')->store('rc_files');
        $preinscription->tax_id = $request->tax_id;
        $preinscription->tax_id_file = $request->file('tax_id_file')->store('tax_id_files');
        $preinscription->address = $request->address;
        $preinscription->activity_code = $request->activity_code;
        $preinscription->company_logo = $request->file('company_logo')->store('company_logos');
        $preinscription->save();

        // Redirection vers la page de connexion
        return redirect()->route('login')->with('success', 'Préinscription réussie. Veuillez vous connecter.');
    }
}
