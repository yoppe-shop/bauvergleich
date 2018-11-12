<?php
namespace App\Form;

class Task
{
    protected $task;
    protected $dueDate;

    public function getTask(): ?string
    {
        return $this->task;
    }

    public function setTask(string $task)
    {
        $this->task = $task;
    }

    public function getDueDate(): ?string
    {
        return $this->dueDate;
    }

    public function setDueDate(string $dueDate)
    {
        $this->dueDate = $dueDate;
    }

    public function isValid() {
        return $this->task !== null && $this->task !== ""
            && $this->dueDate !== null && $this->dueDate !== "";
    }
}