var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Overview of all documented structures and functions.","category":"page"},{"location":"workspaces/#WorkSpaces","page":"Work Spaces","title":"Workspaces","text":"","category":"section"},{"location":"workspaces/","page":"Work Spaces","title":"Work Spaces","text":"Workspaces represent the buffers and temporary storage that are used during the computations of LAPACK functions. Upon initialization with a template matrix, work buffers will be allocated that are appropriate to be used during the factorization of matrices similar to the template.","category":"page"},{"location":"workspaces/#QR-id","page":"Work Spaces","title":"QR","text":"","category":"section"},{"location":"workspaces/","page":"Work Spaces","title":"Work Spaces","text":"QRWs","category":"page"},{"location":"workspaces/#FastLapackInterface.QRWs","page":"Work Spaces","title":"FastLapackInterface.QRWs","text":"QRWs\n\nWorkspace for standard LinearAlgebra.QR factorization using the LAPACK.geqrf! function.\n\nExamples\n\njulia> A = [1.2 2.3\n            6.2 3.3]\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\njulia> ws = QRWs(A)\nQRWs{Float64}\nwork: 64-element Vector{Float64}\nτ: 2-element Vector{Float64}\n\njulia> t = QR(LAPACK.geqrf!(A, ws)...)\nQR{Float64, Matrix{Float64}, Vector{Float64}}\nQ factor:\n2×2 QRPackedQ{Float64, Matrix{Float64}, Vector{Float64}}:\n -0.190022  -0.98178\n -0.98178    0.190022\nR factor:\n2×2 Matrix{Float64}:\n -6.31506  -3.67692\n  0.0      -1.63102\n\njulia> Matrix(t)\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\n\n\n\n\n","category":"type"},{"location":"workspaces/","page":"Work Spaces","title":"Work Spaces","text":"QRWYWs","category":"page"},{"location":"workspaces/#FastLapackInterface.QRWYWs","page":"Work Spaces","title":"FastLapackInterface.QRWYWs","text":"QRWYWs\n\nWorkspace to be used with the LinearAlgebra.QRCompactWY representation of the blocked QR factorization which uses the LAPACK.geqrt! function. By default the blocksize for the algorithm is taken as min(36, min(size(template))), this can be overridden by using the blocksize keyword of the constructor.\n\nExamples\n\njulia> A = [1.2 2.3\n            6.2 3.3]\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\njulia> ws = QRWYWs(A)\nQRWYWs{Float64, Matrix{Float64}}\nblocksize: 2\nwork: 4-element Vector{Float64}\nT: 2×2 Matrix{Float64}\n\njulia> t = QRCompactWY(LAPACK.geqrt!(A, ws)...)\nQRCompactWY{Float64, Matrix{Float64}, Matrix{Float64}}\nQ factor:\n2×2 QRCompactWYQ{Float64, Matrix{Float64}, Matrix{Float64}}:\n -0.190022  -0.98178\n -0.98178    0.190022\nR factor:\n2×2 Matrix{Float64}:\n -6.31506  -3.67692\n  0.0      -1.63102\n\njulia> Matrix(t)\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\n\n\n\n\n","category":"type"},{"location":"workspaces/","page":"Work Spaces","title":"Work Spaces","text":"QRpWs","category":"page"},{"location":"workspaces/#FastLapackInterface.QRpWs","page":"Work Spaces","title":"FastLapackInterface.QRpWs","text":"QRpWs\n\nWorkspace to be used with the LinearAlgebra.QRPivoted representation of the QR factorization which uses the LAPACK.geqp3! function.\n\nExamples\n\njulia> A = [1.2 2.3\n            6.2 3.3]\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\njulia> ws = QRpWs(A)\nQRpWs{Float64}\nwork: 100-element Vector{Float64}\nτ: 2-element Vector{Float64}\njpvt: 2-element Vector{Int64}\n\njulia> t = QRPivoted(LAPACK.geqp3!(A, ws)...)\nQRPivoted{Float64, Matrix{Float64}, Vector{Float64}, Vector{Int64}}\nQ factor:\n2×2 QRPackedQ{Float64, Matrix{Float64}, Vector{Float64}}:\n -0.190022  -0.98178\n -0.98178    0.190022\nR factor:\n2×2 Matrix{Float64}:\n -6.31506  -3.67692\n  0.0      -1.63102\npermutation:\n2-element Vector{Int64}:\n 1\n 2\n\njulia> Matrix(t)\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\n\n\n\n\n","category":"type"},{"location":"workspaces/#Schur-id","page":"Work Spaces","title":"Schur","text":"","category":"section"},{"location":"workspaces/","page":"Work Spaces","title":"Work Spaces","text":"SchurWs\nGeneralizedSchurWs","category":"page"},{"location":"workspaces/#FastLapackInterface.SchurWs","page":"Work Spaces","title":"FastLapackInterface.SchurWs","text":"SchurWs\n\nWorkspace to be used with the LinearAlgebra.Schur representation of the Schur decomposition which uses the LAPACK.gees! function.\n\nExamples\n\njulia> A = [1.2 2.3\n            6.2 3.3]\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\njulia> ws = SchurWs(A)\nSchurWs{Float64}\nwork: 68-element Vector{Float64}\nvs: 2×2 Matrix{Float64}\neigen_values: 2-element Vector{ComplexF64}\n\njulia> t = Schur(LAPACK.gees!('V', A, ws)...)\nSchur{Float64, Matrix{Float64}, Vector{Float64}}\nT factor:\n2×2 Matrix{Float64}:\n -1.6695  -3.9\n  0.0      6.1695\nZ factor:\n2×2 Matrix{Float64}:\n -0.625424  -0.780285\n  0.780285  -0.625424\neigenvalues:\n2-element Vector{Float64}:\n -1.6695025194532018\n  6.169502519453203\n\njulia> Matrix(t)\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\n\n\n\n\n","category":"type"},{"location":"workspaces/#FastLapackInterface.GeneralizedSchurWs","page":"Work Spaces","title":"FastLapackInterface.GeneralizedSchurWs","text":"GeneralizedSchurWs\n\nWorkspace to be used with the LinearAlgebra.GeneralizedSchur representation of the Generalized Schur decomposition which uses the LAPACK.gges! function.\n\nExamples\n\njulia> A = [1.2 2.3\n            6.2 3.3]\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\njulia> B = [8.2 0.3\n            1.7 4.3]\n2×2 Matrix{Float64}:\n 8.2  0.3\n 1.7  4.3\n\njulia> ws = GeneralizedSchurWs(A)\nGeneralizedSchurWs{Float64}\nwork: 90-element Vector{Float64}\nvsl: 2×2 Matrix{Float64}\nvsr: 2×2 Matrix{Float64}\neigen_values: 2-element Vector{ComplexF64}\n\njulia> t = GeneralizedSchur(LAPACK.gges!('V','V', A, B, ws)...)\nGeneralizedSchur{Float64, Matrix{Float64}, Vector{ComplexF64}, Vector{Float64}}\nS factor:\n2×2 Matrix{Float64}:\n -1.43796  1.63843\n  0.0      7.16295\nT factor:\n2×2 Matrix{Float64}:\n 5.06887  -4.00221\n 0.0       6.85558\nQ factor:\n2×2 Matrix{Float64}:\n -0.857329  0.514769\n  0.514769  0.857329\nZ factor:\n2×2 Matrix{Float64}:\n -0.560266  0.828313\n  0.828313  0.560266\nα:\n2-element Vector{ComplexF64}:\n -1.4379554610733563 + 0.0im\n   7.162947865097022 + 0.0im\nβ:\n2-element Vector{Float64}:\n 5.068865029631368\n 6.855578082442485\n\n\n\n\n\n","category":"type"},{"location":"workspaces/#LU-id","page":"Work Spaces","title":"LU","text":"","category":"section"},{"location":"workspaces/","page":"Work Spaces","title":"Work Spaces","text":"LUWs","category":"page"},{"location":"workspaces/#FastLapackInterface.LUWs","page":"Work Spaces","title":"FastLapackInterface.LUWs","text":"LUWs\n\nWorkspace to be used with the LinearAlgebra.LU representation of the LU factorization which uses the LAPACK.getrf! function.\n\nExamples\n\njulia> A = [1.2 2.3\n            6.2 3.3]\n2×2 Matrix{Float64}:\n 1.2  2.3\n 6.2  3.3\n\njulia> ws = LUWs(A)\nLUWs\nipiv: 2-element Vector{Int64}\n\njulia> t = LU(LAPACK.getrf!(A, ws)...)\nLU{Float64, Matrix{Float64}, Vector{Int64}}\nL factor:\n2×2 Matrix{Float64}:\n 1.0       0.0\n 0.193548  1.0\nU factor:\n2×2 Matrix{Float64}:\n 6.2  3.3\n 0.0  1.66129\n\n\n\n\n\n","category":"type"},{"location":"LAPACK/#LAPACK","page":"LAPACK","title":"LAPACK","text":"","category":"section"},{"location":"LAPACK/#QR","page":"LAPACK","title":"QR","text":"","category":"section"},{"location":"LAPACK/","page":"LAPACK","title":"LAPACK","text":"LAPACK.geqrf!(::AbstractMatrix, ::QRWs)\nLAPACK.ormqr!(::AbstractChar, ::AbstractChar, ::AbstractMatrix, ::AbstractVecOrMat, ::QRWs)\nLAPACK.geqrt!(::AbstractMatrix, ::QRWYWs)\nLAPACK.geqp3!(::AbstractMatrix, ::QRpWs)","category":"page"},{"location":"LAPACK/#LinearAlgebra.LAPACK.geqrf!-Tuple{AbstractMatrix, QRWs}","page":"LAPACK","title":"LinearAlgebra.LAPACK.geqrf!","text":"geqrf!(A, ws)\n\nCompute the QR factorization of A, A = QR, using previously allocated QRWs workspace ws. ws.τ contains scalars which parameterize the elementary reflectors of the factorization. ws.τ must have length greater than or equal to the smallest dimension of A.\n\nReturns A and ws.τ modified in-place.\n\n\n\n\n\n","category":"method"},{"location":"LAPACK/#LinearAlgebra.LAPACK.ormqr!-Tuple{AbstractChar, AbstractChar, AbstractMatrix, AbstractVecOrMat, QRWs}","page":"LAPACK","title":"LinearAlgebra.LAPACK.ormqr!","text":"ormqr!(side, trans, A, C, ws)\n\nComputes Q * C (trans = N), transpose(Q) * C (trans = T), adjoint(Q) * C (trans = C) for side = L or the equivalent right-sided multiplication for side = R using Q from a QR factorization of A computed using geqrf!. Uses preallocated workspace ws and the factors are assumed to be stored in ws.τ. C is overwritten.\n\n\n\n\n\n","category":"method"},{"location":"LAPACK/#LinearAlgebra.LAPACK.geqrt!-Tuple{AbstractMatrix, QRWYWs}","page":"LAPACK","title":"LinearAlgebra.LAPACK.geqrt!","text":"geqrt!(A, ws)\n\nCompute the blocked QR factorization of A, A = QR, using a preallocated workspace ws. ws.T contains upper triangular block reflectors which parameterize the elementary reflectors of the factorization. The first dimension of ws.T sets the block size and it must satisfy 1 <= size(ws.T, 1) <= min(size(A)...). The second dimension of T must equal the smallest dimension of A, i.e. size(ws.T, 2) == size(A, 2).\n\nReturns A and ws.T modified in-place.\n\n\n\n\n\n","category":"method"},{"location":"LAPACK/#LinearAlgebra.LAPACK.geqp3!-Tuple{AbstractMatrix, QRpWs}","page":"LAPACK","title":"LinearAlgebra.LAPACK.geqp3!","text":"geqp3!(A, ws)\n\nCompute the pivoted QR factorization of A, AP = QR using BLAS level 3, using the preallocated workspace ws. P is a pivoting matrix, represented by ws.jpvt. ws.τ stores the elementary reflectors. ws.jpvt must have length greater than or equal to n if A is an (m x n) matrix and ws.τ must have length greater than or equal to the smallest dimension of A.\n\nA, ws.jpvt, and ws.τ are modified in-place.\n\n\n\n\n\n","category":"method"},{"location":"LAPACK/#Schur","page":"LAPACK","title":"Schur","text":"","category":"section"},{"location":"LAPACK/","page":"LAPACK","title":"LAPACK","text":"LAPACK.gees!(::AbstractChar, ::AbstractMatrix, ::SchurWs)\nLAPACK.gges!(::AbstractChar, ::AbstractChar, ::AbstractMatrix, ::AbstractMatrix, ::GeneralizedSchurWs)","category":"page"},{"location":"LAPACK/#LinearAlgebra.LAPACK.gees!-Tuple{AbstractChar, AbstractMatrix, SchurWs}","page":"LAPACK","title":"LinearAlgebra.LAPACK.gees!","text":"gees!([select], jobvs, A, ws) -> (A, vs, ws.eigen_values)\n\nComputes the eigenvalues (jobvs = N) or the eigenvalues and Schur vectors (jobvs = V) of matrix A, using the preallocated SchurWs worspace ws. A is overwritten by its Schur form, and ws.eigen_values is overwritten with the eigenvalues.\n\nIt is possible to specify select, a function used to sort the eigenvalues during the decomponsition. The function should accept have the signature f(wr::Float64, wi::Float64) -> Bool, where wr and wi are the real and imaginary parts of the eigenvalue. \n\nReturns A, vs containing the Schur vectors, and ws.eigen_values.\n\n\n\n\n\n","category":"method"},{"location":"LAPACK/#LinearAlgebra.LAPACK.gges!-Tuple{AbstractChar, AbstractChar, AbstractMatrix, AbstractMatrix, GeneralizedSchurWs}","page":"LAPACK","title":"LinearAlgebra.LAPACK.gges!","text":"gges!([select], jobvsl, jobvsr, A, B, ws) -> (A, B, ws.eigen_values, ws.β, ws.vsl, ws.vsr)\n\nComputes the generalized eigenvalues, generalized Schur form, left Schur vectors (jobsvl = V), or right Schur vectors (jobvsr = V) of A and B, using preallocated GeneralizedSchurWs workspace ws.\n\nIt is possible to specify select, a function used to sort the eigenvalues during the decomponsition. The function should accept have the signature f(αr::Float64, αi::Float64, β::Float64) -> Bool, where αr and αi are the real and imaginary parts of the eigenvalue, and β the factor. \n\nThe generalized eigenvalues are returned in ws.eigen_values and ws.β. The left Schur vectors are returned in ws.vsl and the right Schur vectors are returned in ws.vsr.\n\n\n\n\n\n","category":"method"},{"location":"LAPACK/#LU","page":"LAPACK","title":"LU","text":"","category":"section"},{"location":"LAPACK/","page":"LAPACK","title":"LAPACK","text":"LAPACK.getrf!(::AbstractMatrix, ::LUWs)","category":"page"},{"location":"LAPACK/#LinearAlgebra.LAPACK.getrf!-Tuple{AbstractMatrix, LUWs}","page":"LAPACK","title":"LinearAlgebra.LAPACK.getrf!","text":"getrf!(A, ws) -> (A, ws.ipiv, ws.info)\n\nCompute the pivoted LU factorization of A, A = LU, using the preallocated LUWs workspace ws.\n\nReturns A, modified in-place, ws.ipiv, the pivoting information, and the ws.info code which indicates success (info = 0), a singular value in U (info = i, in which case U[i,i] is singular), or an error code (info < 0).\n\n\n\n\n\n","category":"method"},{"location":"#man-fastlapack","page":"Home","title":"Fast Lapack Interface","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The goal of FastLapackInterface is to eliminate any temporary allocations when using certain LAPACK functions compared to Base julia. This is achieved by providing some structures that represent Workspaces that can then be used during the computation of LAPACK functions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Note\nFor now the target functionality is limited to QR, Schur and LU related decompositions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"DocTestSetup = quote\n    using LinearAlgebra, FastLapackInterface\n    using LinearAlgebra: LAPACK\nend","category":"page"}]
}
