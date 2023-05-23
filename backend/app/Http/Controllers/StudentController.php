<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
class StudentController extends Controller
{
    function send(Request $req) {
        $student = new Student;
        $student->name= $req->input("name");
        $student->usn= $req->input("usn");
        $student->phone= $req->input("phone");
        $student->branch= $req->input("branch");
        $student->save();
        return $student;
     }
}
