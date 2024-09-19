<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // Fetch latest courses and instructors
        $latestCourses = Course::latest()->take(5)->get();
        $instructors = Instructor::all();

        return view('home', compact('latestCourses', 'instructors'));
}
}