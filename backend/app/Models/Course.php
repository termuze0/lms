<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'category_id', 'instructor_id', 'status'];

    // Relationship with Lesson
    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }

    // Relationship with User (Instructor)
    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }

    // Relationship with Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
