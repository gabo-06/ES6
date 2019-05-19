const promesa = new Promise((resolve, reject) => {
    // Acción que se ejecutará
    setTimeout(() => {
        const exito = false;
        if (exito)
            resolve('La operación tuvo éxito');
        else
            resolve('La operación no tuvo éxito');        
    }, 4000);
});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});