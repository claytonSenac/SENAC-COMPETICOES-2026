export default function FormCadastro(){

    function submitForm(e:any){
    e.preventDefault();
    const form = e.target;

        const formData = new FormData(form);
        const dados = formData.get('Nome');
        console.log(dados)
    }

    return (
        <>
            <h2>Formulário de Cadastro</h2>
            <form action={submitForm}>
                <section className="formSection">
                    <label htmlFor="Nome">Nome</label>
                    <input type="text"  required minLength={3}/>
                </section>
                <section className="formSection">
                    <label htmlFor="Email">Email:</label>
                    <input type="email" required />
                </section>
                <section className="formSection">
                    <label htmlFor="DataNasc">Data Nascimento:</label>
                    <input type="date" name="DataNasc" id="DataNasc" max="2026-07-30" min="1900-01-01"/>
                </section>
                <button>Salvar</button>
            </form>
        </>
    )
}