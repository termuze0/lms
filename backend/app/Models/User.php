<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // Define the table associated with the model if different from the default
    protected $table = 'users';

    // Mass assignable attributes
    protected $fillable = [
        'name',
        'email',
        'password',
        'role', // e.g., student, instructor, admin
    ];

    // Attributes that should be hidden for serialization
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Cast attributes to native types
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Relationships
    public function courses()
    {
        return $this->hasMany(Course::class, 'instructor_id');
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }

    public function submissions()
    {
        return $this->hasMany(Submission::class);
    }

    // Add any additional methods or scopes as needed
}