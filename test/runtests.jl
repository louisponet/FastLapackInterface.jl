using FastLapackInterface
using LinearAlgebra
using Test
using MKL

include("lse_test.jl")
include("lu_test.jl")
include("schur_test.jl")
include("qr_test.jl")
include("eigen_test.jl")
include("bunch_kaufman_test.jl")
include("cholesky_test.jl")
