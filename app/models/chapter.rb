class Chapter < ApplicationRecord
    belongs_to :author, class_name: "User"
    belongs_to :story
    has_many :pages, dependent: :destroy
end
