        function into() {
          var CantTotal= parseInt(document.getElementById("C1").value)
          var deposito = parseInt(document.getElementById("Cant").value)

          if(document.getElementById("C1").value = (CantTotal + deposito) <= 990){
            document.getElementById("C1").value = (CantTotal + deposito)
          } else {
            alert("Su cuenta no puede tener mas de $990, verifique transaccion")
            deposito=0
            document.getElementById("C1").value = (CantTotal + deposito)
          }

        }

        function withdraw() {
          var CantTotal= parseInt(document.getElementById("C1").value)
          var retiro = parseInt(document.getElementById("Cant").value)

          if(document.getElementById("C1").value = (CantTotal - retiro) >= 10){
            document.getElementById("C1").value = (CantTotal - retiro)
          } else {
            alert("Su cuenta no puede tener menos de $10, verifique transaccion")
            retiro=0
            document.getElementById("C1").value = (CantTotal - retiro)
          }
      }

        function balance() {
          var CantTotal= parseInt(document.getElementById("C1").value)
          document.getElementById("C1").value = CantTotal
        }
