let tower1 : number[] = []
let tower2 : number[] = []
let tower3 : number[] = []
tower1 = [4, 3, 2, 1]
tower2 = []
tower3 = []
console.log(tower1)
console.log(tower2)
console.log(tower3)
function solve(n: number, source: number[], target: number[], helper: number[]) {
    if (n > 0) {
        //  move tower of size n - 1 to helper:
        solve(n - 1, source, helper, target)
        //  move disk from source peg to target peg
        if (source) {
            target.push(_py.py_array_pop(source))
        }
        
        //  move tower of size n-1 from helper to target
        solve(n - 1, helper, target, source)
    }
    
}

solve(tower1.length, tower1, tower3, tower2)
console.log("done")
console.log(tower1)
console.log(tower2)
console.log(tower3)
