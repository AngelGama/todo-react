import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                }) => (
                    <TodoList>
                        {error && <p>❌ Hubo un error :c</p>}
                        {loading && <p>🌐 Cargando, espera un momento...</p>}
                        {(!loading && !searchedTodos.lenght) && <p>📋 Crea un TODO :D</p>}

                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
                )
                }
            </TodoContext.Consumer>

            <CreateTodoButton />
        </React.Fragment>

    );
}

export { AppUI };