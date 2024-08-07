<?php

namespace App\Http\Controllers;


use App\Models\Preinscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    
    public function store(Request $request)
    {
        
        dd($request->all()); // Add this line
        $request->validate([
            '_token' => 'nullable',
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|string|email|max:255|unique:pre_registrations',
            'password' => 'required|string|min:8',
        
        ]);

        $data = $request->all();
        $data['password'] = Hash::make($request->password);
        if ($request->hasFile('company_logo')) {
            $data['company_logo'] = $request->file('company_logo')->store('logos', 'public');
        }

        Preinscription::create($data);

        return response()->json(['Data inserted successfully' => true, 'data' => $request], 200)
        ->header('Access-Control-Allow-Origin', 'http://localhost.com:3000')
        ->header('Access-Control-Allow-Methods', 'POST');
    }
}
