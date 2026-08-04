import { useState } from "react";

export function CalculadoraIMC(){

    const [formData,setFormData] = useState<{altura:string,peso:string}>({altura:"0",peso:"0"});
    const [alturaMode,setAlturaMode] = useState("M");
    const [showResult,setShowResult] = useState(false);

    function handleInputChange(e:any){
        const name = e.target.name;
        let value = e.target.value;

        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));

        setShowResult(false);
    }

    function calcularIMC(){
        let altura =  parseFloat(formData.altura)
        let peso = parseFloat(formData.peso);

        if(alturaMode == "CM"){
            altura =  altura / 100 ;
        }

        let imc = Math.floor(peso  / (altura * altura) * 100) / 100;

        return imc;
    }
    
    function handleSubmit(e:any){
        e.preventDefault();
        setShowResult(true);
    }

    function labelParaImc(imc:number){
        if(imc <= 18.5){
            return "Magreza";
        }

        if(imc > 18.5 && imc < 24.9){
            return "Normal";
        }

        if(imc > 25 && imc < 29.9){
            return "Sobrepeso";
        }

        if(imc > 30 && imc < 39.9){
            return "Obesidade";
        }

        if(imc > 40){
            return "Obesidade Grave"
        }
    }

    return (
        <>
            <h2>Calculadora IMC</h2>
            <form onSubmit={handleSubmit}>
                <div className="formSection">
                    <label htmlFor="altura">Altura:</label>
                    <input type="number" name="altura" value={formData.altura} onChange={handleInputChange} />
                    <select name="alturaMode" onChange={(e) => setAlturaMode(e.target.value)}>
                        <option value="M">Metros</option>
                        <option value="CM">Centimetros</option>
                    </select>
                </div>
                <div className="formSection">
                    <label htmlFor="peso" id="peso">Peso:</label>
                    <input type="number" name="peso" id="peso" value={formData.peso} onChange={handleInputChange} />
                    <p>(KG) Quilograma</p>
                </div>
                <button>Calcular</button>
            </form>

            { showResult && (
                <>
                    <h2>Seu IMC é de {calcularIMC()}</h2>
                    <h2>{labelParaImc(calcularIMC())}</h2>
                </>
            )}
        </>
    )
}